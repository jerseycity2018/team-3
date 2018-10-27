import requests

farm_locations = {'Bay View': '42.779590+-78.857390',
                    'Howard': '40.668330+-73.920000',
                    'Red Hook': '40.675840+-74.004610',
                    'Wagner': '40.800360+-73.932250',
                    'Forest': '40.833360+-73.907110',
                    'Mariner’s Harbor': '40.631080+-74.163650'}

distances = {}
for farm in farm_locations:
    #  hardcoded Jersey office as origin to represent current location for now
    r = requests.get("https://maps.googleapis.com/maps/api/directions/json?origin={}&destination=Universal+Studios+Hollywood&key=AIzaSyDxIMQRo1wJMCqp_QA-GbcwqhQjhLTPdpM".format(farm_locations[farm]))

    distance = r.json()['routes'][0]['legs'][0]['duration']['text']
    distances[farm] = distance

for each in distances:
    print(each, distance)