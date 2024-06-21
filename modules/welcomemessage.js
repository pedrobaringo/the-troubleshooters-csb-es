Hooks.once("init", function() {
    console.log("Initializing Raven module")

    game.settings.register("the-troubleshooters-csb-es", "firstTimeStart", {
       name: "Forzar mensaje de Bienvenida",
        hint: "Si marcas esta casilla te aparecerá el mensaje de bienvenida en el chat la próxima vez que entres.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonId2=Date.now()+2;
	let mensbienv='<h1>Bienvenido al módulo de The Troubleshooters</h1>';
	let mensimpfirst='<p>Importa los compendios para empezar a usar el módulo</p><button id='+buttonId2+' style= "font-family: Komika;">Importa los Compendios</button>';
	let mensimpact='<p>Se ha actualizado el módulo desde la última vez que lo usaste. Importa los compendios para tener la última versión de las Templates de actores y objetos.</p><button id='+buttonId2+' style= "font-family: Komika;">Importa los Compendios</button>'
	let mensrecordtut='<p>Recuerda: Puedes añadir bonificación o penalización, si pulsas la tecla Mayus al hacer click en la Habilidad.</p><button id='+buttonId+' style= "font-family: Komika;">Ve al Tutorial</button>';
	
	let forzarbienvenida=game.settings.get("the-troubleshooters-csb-es", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("the-troubleshooters-csb-es").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("the-troubleshooters-csb-es", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:"Octopus"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/the-troubleshooters-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("the-troubleshooters-csb-es.templates-objetos");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates Objetos")) {
							folderident=game.folders.getName("Templates Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates Objetos", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("the-troubleshooters-csb-es.templates-actores-def");
							let folderident2=''
							if (game.folders.getName("Templates Actores")) {
								folderident2=game.folders.getName("Templates Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
							let collection3 = game.packs.get("the-troubleshooters-csb-es.macros");
							let folderident3=''
							if (game.folders.getName("Macros")) {
								folderident3=game.folders.getName("Macros").id;
							}
							let docs3 =  collection3.importAll({folderId: folderident3, folderName: "Macros", keepId: true});
						}, 500);
						game.user.setFlag("the-troubleshooters-csb-es", "welcomeMessage", true);
						game.user.setFlag("the-troubleshooters-csb-es", "lastVersion", game.modules.get("the-troubleshooters-csb-es").version);
					});
				}
				}, 100);
			});
			game.settings.set("the-troubleshooters-csb-es", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("the-troubleshooters-csb-es", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:"Octopus"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/the-troubleshooters-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("the-troubleshooters-csb-es.templates-objetos");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates Objetos")) {
							folderident=game.folders.getName("Templates Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates Objetos", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("the-troubleshooters-csb-es.templates-actores-def");
							let folderident2=''
							if (game.folders.getName("Templates Actores")) {
								folderident2=game.folders.getName("Templates Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates Actores", keepId: true});
							let collection3 = game.packs.get("the-troubleshooters-csb-es.macros");
							let folderident3=''
							if (game.folders.getName("Macros")) {
								folderident3=game.folders.getName("Macros").id;
							}
							let docs3 =  collection3.importAll({folderId: folderident3, folderName: "Macros", keepId: true});
						}, 500);
						game.user.setFlag("the-troubleshooters-csb-es", "welcomeMessage", true);
						game.user.setFlag("the-troubleshooters-csb-es", "lastVersion", game.modules.get("the-troubleshooters-csb-es").version);
					});
				}
				}, 500);
			});
		}
	} else if (!game.user.getFlag("the-troubleshooters-csb-es", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:"Octopus"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/the-troubleshooters-csb-es');
				});
			}
			}, 100);
		});
		game.user.setFlag("the-troubleshooters-csb-es", "welcomeMessage", true);
		game.settings.set("the-troubleshooters-csb-es", "firstTimeStart", false);
	}
})