import requests

farm_locations = {'Bay View': '42.779590+-78.857390',
                    'Howard': '40.668330+-73.920000',
                    'Red Hook': '40.675840+-74.004610',
                    'Wagner': '',
                    'Forest': '',
                    'Mariner’s Harbor': ''}


#  hardcoded Jersey office as origin to represent current location for now
r = requests.get("https://maps.googleapis.com/maps/api/directions/json?origin=40.728810+-74.035400&destination=Universal+Studios+Hollywood&key=AIzaSyDxIMQRo1wJMCqp_QA-GbcwqhQjhLTPdpM")

distance = r.json()['routes'][0]['legs'][0]['duration']['text']

print(distance)