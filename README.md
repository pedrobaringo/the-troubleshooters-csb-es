# Fichas para The Troubleshooters en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Añadir estilos CSS](#añadir-estilos-css)
- [Crear un PJ](#crear-un-pj)
  - [Pestaña de Habilidades](#pestaña-de-habilidades)
  - [Pestaña de Talentos y Complicaciones](#pestaña-de-talentos-y-complicaciones)
  - [Pestaña de Combate](#pestaña-de-combate)
  - [Pestaña de Equipo y Lenguas](#pestaña-de-equipo-y-lenguas)
  - [Pestaña de Descripción y Notas](#pestaña-de-descripción-y-notas)
- [Crear un PNJ](#crear-un-pnj)
  - [Pestaña de Habilidades](#pestaña-de-habilidades-1)
  - [Pestaña de Combate](#pestaña-de-combate-1)
  - [Pestaña de Descripción y Notas](#pestaña-de-descripción-y-notas-1)
- [Crear Objetos](#crear-objetos)
- [Hacer tiradas](#hacer-tiradas)
- [Iniciativa y Combate](#iniciativa-i-combate)
- [Posibles problemas](#posibles-problemas)

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

En la parte de arriba se pueden poner la vitalidad máxima y actual, las marcas de mejora y los puntos de historia, asi como hacer la tirada de iniciativa. Tambien es aquí donde aparecerán los estados si se arrastran a la ficha.

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

## Crear un PNJ
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/8968dfd6-5c10-4106-93c1-46780300058a)

Aqui tenemos que seleccionar en Template una de las dos templates llamadas PNJ_Template segun el siguiente criterio:
* Si vamos a **usar el módulo Dice so Nice** (https://foundryvtt.com/packages/dice-so-nice) para ver las tiradas con dados 3D, debemos seleccionar la template **"PNJ_Template_DSN"**. Sin el módulo no funcionarán las tiradas con esta template.
* Si **no vamos a usar ese módulo**, debemos seleccionar la template **"PNJ_Template"**.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/1879812a-426b-49f7-a77e-97129bfce476)

En la parte de arriba se pueden poner la vitalidad máxima y actual y podemos asignarle la iniciativa si es un valor fijo o hacer check en la casilla de encima si la iniciativa es con una tirada de Acción.

Tambien apareceran aqui las etiquetas que arrastremos a este personaje y la casilla de Dar la Vuelta a las tiradas si le arrastramos la correspondiente etiqueta (que está en la carpeta "Etiquetas Adversarios").

### Pestaña de Habilidades
En esta pestaña podemos poner los valores de ha habilidad básica y Especialista así como añadir más habilidades con el botón +.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/adc9089d-7058-4893-9c86-81908d5062d4)

### Pestaña de Combate
En esta pestaña podeis añadir las armas con el botón + con todas sus estadisticas, podeis definir el valor de defensa si tiene así como la protección.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/ea1d1cb3-49ce-4156-be2c-23ce75eaba0a)

### Pestaña de Descripción y Notas
En esta última pestaña podemos tomar notas o describir al personaje.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/7670cc6d-3ca5-4b7a-9203-76fd6ddf92af)

## Crear Objetos
Si hacemos click en crear objeto y elegimos el tipo "equippableItem" podremos crear objetos de todos los tipos usando las templates.
Los tipos son:
* **Armas_CaC_Template**: Para armas Cuerpo a Cuerpo, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/032ce1b5-5de8-4cff-9050-ca47a1a1ccd5)

* **Armas_Dist_Template**: Para armas a Distancia, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/cf9ecdba-2816-4545-b2bf-cc294ce6667e)

  
* **Complicacion_Template**: Para las Complicaciones, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/5d88451e-87c1-4c0e-8cc0-255f2abea010)


* **Talento_Template**: Para los Talentos, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/e5b862ba-1c5a-43c9-a032-1d46e63298ae)


* **Estados_Template**: Para los Estados, sirve para PJs y PNJs.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/ebeb889d-d5a1-4942-bf53-60948138272d)


* **Etiquetas_Template**: Para las etiquetas de los PNJs.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/33e16ba9-d43c-479c-a3da-991a1955bbd5)

## Hacer tiradas
Para hacer tiradas simplemente se tiene que hacer click en la habilidad o icono de dado correspondiente o en el botón en el caso de ataques. Saldrá el mensaje en el chat con los botones para dar la vuelta a la tirada gastando puntos de Historia (se restan automaticamente) y el Daño si corresponde.
Al clickar en los botones se genera un nuevo mensaje con el resultado correspondiente a la acción.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/8e6f3f8f-ca9e-4579-8fee-6a63a356e79b)
![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/e4918cd5-30e8-471e-b3cc-bae567ec225a)

Para aplicar un modificador a la tirada, se deberá pulsar la tecla "Mayus" mientras se hace click. Aparecerá un dialogo donde podemos asignar el modificador positivo o negativo. Esto funciona solo en las tiradas donde puede haber modificador.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/14c370ba-017a-4d69-b5e8-5594f2e2bbea)

## Iniciativa y Combate
Antes de empezar un combate, todos los PJs y los PNJs que tengan de Iniciativa una tirada de acción, deberan hacer click en su iniciativa para que se lancen los dados y se calcule.

Solo cuando lo hayan hecho todos se podrá "tirar" la iniciativa en el menú de "Encuentros de Combate". Se ordenarán los actores de mayor iniciativa a menor.

Como caso particular, si se hace una acción "¡PAM! - Disparo preciso" la iniciativa en la ficha bajará en 2 puntos automaticamente, pero se tendrá que volver a calcular para el siguiente turno en "Encuentros de Combate".

En el caso de "¡RATATATA! - Vaciar el Arma" saldrán dos botones de daño, el normal que se aplica si impactas a varios personajes y el "Daño a un solo objetivo" que añade dos dados al daño automaticamente si solo te concentras en un objetivo.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/99d65377-8e29-4f49-bba6-410e97babd60)

## Posibles problemas
Debido a como esta creado el sistema Custom System Builder, tuve que implementar los botones del chat de una forma poco óptima. Esto puede provocar que algunas veces no aparezcan los botones o aparezcan en mensajes anteriores (creo que puede ser más habitual con conexiones lentas, pero no he podido probarlo).

Este problema no afecta a los resultados de las tiradas y si se quiere dar la vuelta a la tirada se puede hacer mentalmente y restar los puntos de Historia manualmente en la ficha.

En el caso que sucediese en una tirada de combate y no apareciese el botón de Daño, se puede hacer la tirada usando en el chat la siguiente formula (explotan los 6 y cuenta como éxitos los valores superiores o iguales a 4) sustituyendo Y por el número de dados de daño que se tirarian: **Yd6x6cs>=4**









