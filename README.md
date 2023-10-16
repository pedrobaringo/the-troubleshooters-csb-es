# Fichas para The Troubleshooters en Custom System Builder
## Introducción
Modulo de Foundry VTT con las templates de las fichas para el juego The Troubleshooters en español para el sistema Custom System Builder ( https://foundryvtt.com/packages/custom-system-builder ).
Para aprender como instalarlo y usarlo podeis ver el tutorial en el siguiente enlace: https://youtu.be/2LBxsz_r_Wg

## Instalación
Para instalar este módulo en Foundry tienes que usar el siguiente Manifest en el menú de módulos como se muestra en la imagen: https://github.com/pedrobaringo/the-troubleshooters-csb-es/releases/download/1.0.7/module.json

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/d904a729-8c60-433c-a126-d54e05735512)

Cuando hayas creado un mundo con el sistema Custom System Builder debes activar este módulo. En la pestaña de compendios tendrás dos: "Templates Actores" y "Templates Objetos".
Es importante que importes primero los Objetos y después los Actores, pero sobretodo que se mantenga el ID del documento como se ve en la imagen:

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/6fa9c0c2-1936-4db6-99b2-7e80f54e7172)

## Añadir estilos CSS
Para que el estilo de las fichas y mensajes sean más parecidos al libro debemos ir a Configurar Ajustes --> Custom System Builder y allí rellenarel campo CSS Style file con "modules/the-troubleshooters-csb-es/packs/assets/TheTroubleshooters.css", sin las comillas. Y ya que estamos en este menú, aprovechamos para cambiar la Initiative formula a "iniciativa" (sin las comillas y en minuscula).

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/c499de71-1317-44bd-89b1-33805d8cf15d)

## Crear un PJ
Una vez estan importadas las templates ya podemos crear los Actores.
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/8968dfd6-5c10-4106-93c1-46780300058a)

Aqui tenemos que seleccionar en Template una de las dos templates llamadas PJ_Template segun el siguiente criterio:
* Si vamos a **usar el módulo Dice so Nice** (https://foundryvtt.com/packages/dice-so-nice) para ver las tiradas con dados 3D, debemos seleccionar la template **"PJ_Template_DSN"**. Sin el módulo no funcionarán las tiradas con esta template.
* Si **no vamos a usar ese módulo**, debemos seleccionar la template **"PJ_Template"**.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/ce995ff3-b71b-4df6-b4dc-f640304f8104)

En la parte de arriba se pueden poner la vitalidad máxima y actual, las marcas de mejora y los puntos de historia, asi como hacer la tirada de iniciativa.

### Pestaña de Habilidades
En la pestaña de habilidades se pueden modificar los valores entre 15 y 106.

### Pestaña de Talentos y Complicaciones
En esta pestaña se pueden arrastrar los objetos creados con las templates respectivas y se añadirán a la tabla correspondiente.
Si se quiere modificar un talento o complicación se puede clickar en el nombre de ésta para abrir su ficha y cambiar lo que se quiera (solo afecta a la de la ficha).
Se pueden borrar con el icono de papelera de la derecha.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/7322395d-48fc-4a2e-a76e-4771986eb33b)

### Pestaña de Combate
En esta pestaña podeis escribir si lleva algun tipo de protección y arrastrar los objetos de armas cuerpo a cuerpo (hechos con la template "Armas_CaC_Template") y armas a distancia (hechos con la template "Armas_Dist_Template") y se añadirán a la tabla correspondiente.
Si se quiere modificar una arma se puede clickar en el nombre de ésta para abrir su ficha y cambiar lo que se quiera (solo afecta a la de la ficha).
Se pueden borrar con el icono de papelera de la derecha.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/cb72d5f0-478e-4127-8f52-5952ac224dc6)

### Pestaña de Equipo y Lenguas
En esta pestaña se pueden añadir los kits de equipo, idiomas y ganchos de trama.
Para el Equipo tenemos que pulsar en el botón de + para crear una nueva linea y rellenarla como queramos. Podemos marcarlo como de Marca personal o si lo tenemos equipado.
Para las lenguas, tenemos la casilla de lengua materna y debajo con el botón + podemos añadir lenguas habladas con fluidez.
Los Ganchos de trama estan en Contactos y se añaden pulsando el botón +.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/17456373-f04f-4f08-86d9-1b9b2cb5a678)

### Pestaña de Descripción y Notas
En esta última pestaña podemos rellenar la descripción del PJ y tomar notas o escribir su trasfondo.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/a45e5f8d-5b5d-4df4-b72a-9ba78381ebcd)






