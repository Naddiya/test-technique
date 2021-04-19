# coding=utf8

import requests as r
import mariadb
import json
import os, sys
import requests
from lxml import html

"""
Fonction permettant de récupérer l'URL SensCritique d'un animé
⚠️ Ne pas toucher à cette fonction, elle vous sera utile.
"""
def get_sc_anime_url(anime_name):
    url = f'https://www.senscritique.com/sc2/search/autocomplete.json?query={anime_name}'
    headers = {
        "x-requested-with": "XmlHttpRequest"
    }
    result = r.get(url, headers=headers)
    content_in_json = json.loads(result.content)
    first_result = None
    if len(content_in_json['json']) > 0:
        first_result = content_in_json['json'][0]['url']

    return first_result
"""
Connexion à la base de données
⚠️ Ne pas toucher à cette fonction, elle vous sera utile.
"""
def connect_to_database():
    try:
        connection = mariadb.connect(
            host="172.18.0.3",
            port=3306,
            user="nana",
            password="nana",
            database="senscritique"
        )
        return connection
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)

"""
Ajouter votre logique en dessous ⬇️
"""
print("Hello world ! 👋🏻")

def add_rating_column_if_not_exists(cur):
    # if column don't exist create it with float data type
    cur.execute("ALTER TABLE animes ADD COLUMN IF NOT EXISTS rating float")

def init_database():
    # Connect to database and use cursor to search db
    conn = connect_to_database()
    cur = conn.cursor()
    return(conn, cur)

def get_animes_title_and_id(cur):
    cur.execute("SELECT JSON_EXTRACT(title, '$.romaji'), id FROM animes")
    return cur.fetchall()

def scrap_sc_rating(anime_name):
# loop on anime data
    rating_page = get_sc_anime_url(anime_name)
    if not rating_page:
        return None
    return float(html.fromstring(r.get(rating_page).content).xpath('//span[@class="pvi-scrating-value"]/text()')[0])

def update_sc_ratings_to_animes(cur, anime_id, anime_rating):
    cur.execute("UPDATE animes SET animes.rating=? WHERE animes.id=?", (anime_rating, anime_id))

def main():
    conn, cur = init_database()
    add_rating_column_if_not_exists(cur)
    anime_data = get_animes_title_and_id(cur)
    for (anime) in anime_data:
        # print(anime)
        anime_name = anime[0]
        anime_id = anime[1]
        anime_rating = scrap_sc_rating(anime_name)

        if anime_rating:
            print(anime_rating)
            update_sc_ratings_to_animes(cur, anime_id, anime_rating)
    conn.commit()
    print(f"Last Inserted ID: {cur.lastrowid}")

main()