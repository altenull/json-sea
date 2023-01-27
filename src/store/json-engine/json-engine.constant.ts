import { assets } from '../../environment';

export const DEFAULT_STRINGIFIED_JSON: string = `{
  "app_name": "JSON Sea",
  "lat": 37.566789,
  "lng": 126.97842,
  "location": "Seoul, South Korea",
  "created_year": 2023,
  "app_release_date": "${new Date(2023, 0, 16).toISOString()}",
  "json_sea_access_date": "${new Date().toISOString()}",
  "active": true,
  "primary_color": "#0072F5",
  "null_property": null,
  "app_url": "https://jsonsea.com/",
  "sea_img_url": "${assets.seaImage}",
  "sea_video_url": "${assets.seaVideo}",
  "sea_audio_url": "${assets.seaAudio}",
  "thanks_to": [
    {
      "name": "NextUI",
      "url": "https://nextui.org/"
    },
    {
      "name": "React Flow",
      "url": "https://reactflow.dev/"
    }
  ],
  "complex_object": {
    "long_number_1": 234828153200,
    "long_number_2": 2123451234.2214,
    "object": {
      "boolean_1": true,
      "boolean_2": false,
      "array": [
        "J",
        "S",
        "O",
        "N",
        "S",
        "E",
        "A",
        [
          2,
          0,
          2,
          3
        ]
      ]
    }
  },
  "random_virtual_members": [
    {
      "id": 1,
      "first_name": "Torrin",
      "last_name": "Chaimson",
      "preferred_color": "#315e33",
      "birth": "2022-10-23T00:30:51Z",
      "random_url": "https://wikimedia.org/justo.aspx?nisi=vivamus&volutpat=in&eleifend=felis",
      "random_img_url": "https://dummyimage.com/136x207.png"
    },
    {
      "id": 2,
      "first_name": "Iggy",
      "last_name": "Dymick",
      "preferred_color": "#aef195",
      "birth": "2022-07-13T13:03:36Z",
      "random_url": "https://etsy.com/cum/sociis/natoque/penatibus/et/magnis.html?dui=vel",
      "random_img_url": "https://dummyimage.com/109x260.png"
    },
    {
      "id": 3,
      "first_name": "Lowell",
      "last_name": "Orsman",
      "preferred_color": "#f7a2e2",
      "birth": "2022-12-13T18:06:06Z",
      "random_url": "https://cbc.ca/nunc/commodo/placerat/praesent/blandit/nam.aspx?ipsum=felis&aliquam=ut",
      "random_img_url": "https://dummyimage.com/127x233.png"
    }
  ]
}`;
