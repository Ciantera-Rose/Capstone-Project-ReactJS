import React from "react";
import { useParams } from "react-router-dom";

import LocationList from "../components/LocationList";

const MOCK_LOCATIONS = [
  {
    id: "l1",
    title: "The Brooklyn Mirage",
    description:
      "The Brooklyn Mirage is a breathtaking open-air sanctuary in the heart of the Avant Gardner complex.",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/597a8b3920099e0bff668154/1538683215516-2O43UPWH0BHWLTGPF6DE/ke17ZwdGBToddI8pDm48kEZk6F5PbQiC1r1IZ2IoUeR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfvbNRGeuxQFwQ8dTRP7_IjByFLq5tUM4qN8xXPNmdulg0wU7-gbCzcJVB_xdsPuSg/image-asset.jpeg",
    address: "140 Stewart Ave, Brooklyn, NY 11237",
    location: {
      lat: 40.7108803,
      lng: -73.9257375,
    },
    userId: "u1",
  },
  {
    id: "l2",
    title: "Output",
    description:
      "North Brooklyn's premier electronic and dance music venue that offers a more low-key experience than its bottle-service-heavy competitors, but still delivers heavy-hitting performers",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/06/25/b8/2d/output.jpg",
    address: "74 Wythe Ave, Brooklyn, NY 11249",
    location: {
      lat: 40.7222917,
      lng: -73.9578222,
    },
    userId: "u2",
  },
];

const UserLocations = () => {
  const userId = useParams().userId;
  const loadedLocations = MOCK_LOCATIONS.filter(
    (location) => location.userId === userId
  );
  return <LocationList items={loadedLocations} />;
};

export default UserLocations;

// Fetch and render all the locations that belong to a user
// Use mock data until backend built
// Return list of locations
// Need a Location list Component to pass to this one
// Need Location item Component to pass to list
// Pass Mock data props
// Adjust routes in app js so correct pages are loaded

// TODO: Need to only show location that belongs to specfic user
// useParams hook (functional comp) returns obj of key/value pairs of URL parameters
// Filter locations to return new array
