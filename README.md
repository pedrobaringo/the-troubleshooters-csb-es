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


Para usar los estilos de la ficha y del chat y tener la formula de iniciativa correcta debereis ir a "Configurar ajustes" y a "Custom System Builder". Allí debeis rellenar los siguientes campos:

Initiative Formula: iniciativa

CSS Style file: modules/the-troubleshooters-csb-es/packs/assets/TheTroubleshooters.css

Para instalar este módulo en Foundry tienes que usar el siguiente Manifest: https://github.com/pedrobaringo/the-troubleshooters-csb-es/releases/download/1.0.7/module.json
