DROP TABLE IF EXISTS Words;
CREATE TABLE Words (
  "id" INT GENERATED ALWAYS AS IDENTITY,
  "image" TEXT NULL,
  "es_name" TEXT NULL,
  "es_description" TEXT NULL,
  "es_audio" TEXT NULL,
  "en_name" TEXT NULL,
  "en_description" TEXT NULL,
  "en_audio" TEXT NULL
);
INSERT INTO Words (
    "image",
    "es_name",
    "es_description",
    "es_audio",
    "en_name",
    "en_description",
    "en_audio"
  )
VALUES
  (
    'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/16581',
    'perro',
    'Cánido domesticable capaz de ladrar\, generalmente con un buen sentido del oído y del olfato',
    'https://wl1media.s3.amazonaws.com/v_20190807/audios/pairs/111320',
    'dog',
    'Domesticable\, carnivorous canid that is able to bark and typically has acute senses of smell and hearing',
    NULL
  ),
  (
    'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/25818',
    'gato',
    'Felino domesticable de pequeño tamaño\, orejas puntiagudas y cola larga\, capaz de maullar',
    NULL,
    'cat',
    'Domesticable\, carnivorous feline of small size with pointed ears and a long tail\, capable of meowing',
    NULL
  ),
  (
    'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/14443',
    'vaca',
    'Mamífero rumiante domesticable\, de gran tamaño\, con cuernos lisos y capaz de mugir',
    'https://wl1media.s3.amazonaws.com/v_20190807/audios/pairs/114398',
    'cow',
    'Domesticable\, ruminant mammal\, that is large with smooth horns and able to moo',
    NULL
  ),
  (
    'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/24749',
    'toro',
    'Mamífero rumiante domesticable\, de gran tamaño\, con cuernos lisos y capaz de mugir',
    'https://wl1media.s3.amazonaws.com/v_20190807/audios/pairs/114026',
    'bull',
    'Domesticable\, ruminant mammal\, that is large with smooth horns and able to moo',
    NULL
  ),
  (
    'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/16077',
    'caballo',
    'Mamífero herbívoro equino\, de gran tamaño\, crines y cola de largas cerdas y empleado como montura o animal de carga',
    'https://wl1media.s3.amazonaws.com/v_20190807/audios/pairs/103587',
    'horse',
    'Large\, herbivorous mammal that has a long mane and tail and is used for riding or as a pack animal',
    NULL
  ),
  (
    'https://wl1media.s3-eu-west-1.amazonaws.com/v_20190807/images_w/pairs/13450',
    'cerdo',
    'Mamífero de granja omnívoro de cuerpo pesado\, generalmente rosa y corta cola curva\, criado principalmente por su carne',
    'https://wl1media.s3.amazonaws.com/v_20190807/audios/pairs/104291',
    'pig',
    'Omnivorous farm mammal that has a heavy body with a generally pink color and a short\, curved tail\, raised mainly for its meat',
    NULL
  );