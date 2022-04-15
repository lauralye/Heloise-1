import sys
import logging
import rds_config
import pymysql
import mysql.connector


rds_host = "reactdb.coumnavq4mhd.ap-southeast-1.rds.amazonaws.com"
name = rds_config.db_username
password = rds_config.db_password
db_name = rds_config.db_name

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = mysql.connector.connect(host=rds_host, user=name, passwd=password, db=db_name)
except:
    logger.error("ERROR: Unexpected error: Could not connect to MySql instance.")
    sys.exit()


logger.info("SUCCESS: Connection to RDS mysql instance succeeded")


records =[]

cur = conn.cursor()

query = ("SELECT * FROM specialist_request")


cur.execute(query)
# with conn.cursor() as cur:

#     cur.execute("SELECT * FROM specialist_request")

#conn.commit()


# for row in cur:
#     record = {

#         'id': row[1],
#         'user_info':{
#             'name': row[2],
#             'email': row[3],
#             'occupation': row[4],
#             'company': row[5],
#             'qualifications': row[6],
#             'reason': row[7],
            
#         }
#     }
#     records.append(record)

# print(records)

rows = cur.fetchall()

for row in rows:
    for col in row:
        print(col, end=' ')
    print()

conn.close()