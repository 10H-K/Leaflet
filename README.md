# Utilization of Leaflet, JavaScript, and CSS to Visualize Earthquake Data #

## Overview ##

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. The goal of this project is to help the USGS in building a new set of tools that will allow them to visualize their earthquake data.

## Process ##

1. Get the dataset by following these steps:
    - Visit the USGS GeoJSON Feed: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
    - Choose a dataset to visualize, which was the Past Day All Earthquakes Dataset for this project
    - Use the URL of the JSON representation to pull in the data for the visualization
2. Use Leaflet to create a map that plots all the earthquakes from the dataset based on their longitude and latitude
    - Data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color
    - Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color
    - Creation of popups that provide additional information about the earthquake when its associated marker is clicked
    - Creation of legend that will provide context for the map data

## Results ##

![image](https://github.com/10H-K/Leaflet_Earthquake_Visualization/assets/152930492/b6c88649-5d9a-4622-ae52-00ba10a260f1)

## GitHub Pages ##

https://10h-k.github.io/Leaflet_Earthquake_Visualization/

