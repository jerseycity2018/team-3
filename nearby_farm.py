import requests

farm_locations = {'Bay View': '42.779590+-78.857390',
                    'Howard': '40.668330+-73.920000',
                    'Red Hook': '40.675840+-74.004610',
                    'Wagner': '40.800360+-73.932250',
                    'Forest': '40.833360+-73.907110',
                    'Mariner’s Harbor': '40.631080+-74.163650'}

closest_farm = ""
closest_distance = 100000.0
for farm in farm_locations:
    #  hardcoded Jersey office as origin to represent current location for now
    r = requests.get("https://maps.googleapis.com/maps/api/directions/json?origin=40.728809+-74.035400&destination={}&key=AIzaSyDxIMQRo1wJMCqp_QA-GbcwqhQjhLTPdpM".format(farm_locations[farm]))

    distance = r.json()['routes'][0]['legs'][0]['distance']['text']

    str_length = len(distance)
    distance_revised = float(distance[:str_length - 2].strip())

    if distance_revised < closest_distance:
        closest_distance = distance_revised
        closest_farm = farm

print("{} Farm is the closest to you: {} miles away".format(closest_farm, closest_distance))
