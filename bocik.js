const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json');
const { prefix, token } = require('./config.json');

client.on('ready' , () => {
    console.log("BOT aktywny. Funkcjonuje pod nickiem: " + client.user.tag)
    console.log("Podłączono do serwera DoGryCzlowieku.pl")
})

bot_secret_token = "NTU4NzA3NTI5NjA2MjM0MTI4.D3awhg.9xvatvwhDzDd5GKXKhIKgkJwiGc"

client.login(bot_secret_token)

client.on('ready' , () => {
    client.user.setActivity("Yester! na YouTubie", {type: "WATCHING"})
    const polaczono = new Discord.RichEmbed()
    .setColor("#16ff00")
    .setAuthor("Pomocnik - podłączono")
    .setTitle("BOT NAWIĄZAŁ POŁACZENIE")
    .setDescription("Połączenie z serwerem zostało nawiązane pomyślnie")
    .setTimestamp()
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');

    var generalChannel = client.channels.get("558703773682368524")
    generalChannel.send(polaczono)
})

client.on('message' , message => {
    if (message.content === '=zaproszenie') {
    message.delete()
	const zapro = new Discord.RichEmbed()
    .setColor('#00fdff')
    .setTitle('Link do zapraszania znajomych')
    .setDescription('https://discord.gg/Tr4mUGQ')
    .addField('Informacja', 'Prosimy nie wysyłać masowo zaproszeń do ludzi, wysyłajcie te zaproszenia tylko do znajomych :grin:', true)
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
    message.channel.send(zapro)
    const logzapro = new Discord.RichEmbed()
    .setColor('#001bff')
    .setAuthor('Pomocnik - logi')
    .setTitle('Użytkownik zarządał linku zaproszenia')
    .setDescription(`${message.author} zarządał linku zaproszenia`)
    .setTimestamp()
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
    var generalChannel = client.channels.get("558703773682368524")
    generalChannel.send(logzapro)
}
else if (message.content === '=help') {
    message.delete()
    const pomoc = new Discord.RichEmbed()
    .setColor('#00ffcc')
    .setTitle('Dostępne komendy')
    .setDescription('Spójrz niżej - obecnie użytkownicy nie mają wielu dostępnych komend')
    .addField('=zaproszenie', 'Komenda wyświetlająca link zaproszenia', true)
    .setTimestamp()
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
    message.channel.send(pomoc)
    const logpomoc = new Discord.RichEmbed()
    .setColor('#001bff')
    .setAuthor('Pomocnik - logi')
    .setTitle('Użytkownik zarządał pomocy BOTa')
    .setDescription(`${message.author} zarządał pomocy`)
    .setTimestamp()
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
    var generalChannel = client.channels.get("558703773682368524")
    generalChannel.send(logpomoc)
}
})
client.on('message' , message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if(message.member.permissions.has('ADMINISTRATOR')){
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command ===`warn`) { /*Warnowanie*/
        message.delete()
        if (!args.length) {
            const bladwarn = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('Niepoprawne użycie')
            .setDescription('Nastąpiło niepoprawne użycie komendy =warn')
            .setAuthor('Pomocnik - błędy')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            var generalChannel = client.channels.get("558703773682368524")
            message.channel.send(`${message.author} Niepoprawne użycie. Proszę oznaczyć osobę która ma otrzymać WARNa.`)
         return  generalChannel.send(bladwarn)
        }
    const taggedUser = message.mentions.users.first();
    let member = message.mentions.members.first();
    const warnik = new Discord.RichEmbed()
    .setColor('#ff5757')
    .setTitle('OSTRZEŻENIE/WARN')
    .setDescription('Złamano regulamin, dokonano ostrzeżenia')
    .setAuthor('Pomocnik - WARN')
    .setTimestamp()
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg')
    .addField('Ostrzegający', `${message.author}`, true)
    .addField('Ostrzeżony', `${taggedUser}`, true)
    var generalChannel = client.channels.get("558008892299280384")
    generalChannel.send(warnik)
    member.addRole('558702528309624833')
    }
    else if (command === 'unwarn') { /* Usuwanie warnów*/ 
        message.delete()
     if (!args.length) {
            const bladunwarn = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('Niepoprawne użycie')
            .setDescription('Nastąpiło niepoprawne użycie komendy =unwarn')
            .setAuthor('Pomocnik - błędy')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            var generalChannel = client.channels.get("558703773682368524")
            message.channel.send(`${message.author} Niepoprawne użycie. Proszę oznaczyć osobę która ma otrzymać unWARNa.`)
         return  generalChannel.send(bladunwarn)
        }
    const taggedUser = message.mentions.users.first();
    let member = message.mentions.members.first();
    const unwarnik = new Discord.RichEmbed()
    .setColor('#f1fe75')
    .setTitle('OSTRZEŻENIE/WARN - Odwołanie')
    .setDescription('Ostrzeżenie zostało odwołane')
    .setAuthor('Pomocnik - unWARN')
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg')
    .setTimestamp()
    .addField('Osoba cofająca ostrzeżenie', `${message.author}`, true)
    .addField('Osoba której cofnięto ostrzeżenie', `${taggedUser}`, true)
    var generalChannel = client.channels.get("558008892299280384")
    generalChannel.send(unwarnik)
    member.removeRole('558702528309624833')
}
    else if (command === "streamstart") { /* Przypomnienie o streamie*/
    message.delete()
    const streamstart = new Discord.RichEmbed()
    .setColor('#ffa803')
    .setTitle('Yester! właśnie zaczął streamować')
    .setAuthor('Przypominajka')
    .setThumbnail('https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/45420205_787822008226619_7798306500836851712_n.png?_nc_cat=100&_nc_ht=scontent.fktw1-1.fna&oh=1822c7ca54c57c65e67caecc64ffc20e&oe=5D0FAA0D')
    .setDescription('Kliknij [tutaj](https://www.youtube.com/channel/UC5WDy9qLa-VqhXvJDfeSdTg) aby przejść do jego kanału, zostawić suba z dzwoneczkiem :heart:')
    .addField('Zobacz też jego Instagram', 'Znajdziesz [tu](https://www.instagram.com/yesterniak69/) wiele zdjęć z życia Yestera! spoza komputera! :smile:', true)
    .addField('Ten pan ma również Steama', 'Zaproś go na [Steamie](https://steamcommunity.com/id/yesterniak/) jeśli chciałbyś z nim kiedyś zagrać :joy:', true)
    .addField('Zresztą na Facebooku również go zaobserwuj', 'Co Ci zaszkodzi polubić [tą](https://www.facebook.com/Yester-633283243680497/) stronę :thinking:', true)
    .addField('Oznaczę was żebyście widzieli :grin:', '@here', true)
    .setTimestamp()
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
    var generalChannel = client.channels.get("558701163067998219")
    generalChannel.send(streamstart)
    client.user.setActivity("Stream Yestera!", {type: "WATCHING"})
}
    else if (command === "streamstop") { /* Koniec streama */
    message.delete()
    const streamstope = new Discord.RichEmbed()
    .setColor('#ffa803')
    .setTitle('Yester! właśnie skończył streamować')
    .setAuthor('Przypominajka')
    .setDescription('Ale kliknij [tutaj](https://www.youtube.com/channel/UC5WDy9qLa-VqhXvJDfeSdTg) aby przejść do jego kanału i zostawić suba z dzwoneczkiem :heart:')
    .addField('Zobacz też jego Instagram', 'Znajdziesz [tu](https://www.instagram.com/yesterniak69/) wiele zdjęć z życia Yestera! spoza komputera! :smile:', true)
    .addField('Ten pan ma również Steama', 'Zaproś go na [Steamie](https://steamcommunity.com/id/yesterniak/) jeśli chciałbyś z nim kiedyś zagrać :joy:', true)
    .addField('Zresztą na Facebooku również go zaobserwuj', 'Co Ci zaszkodzi polubić [tą](https://www.facebook.com/Yester-633283243680497/) stronę :thinking:', true)
    .addField('Tu też was oznaczę :joy:', '@here', true)
    .setTimestamp()
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
    var generalChannel = client.channels.get("558701163067998219")
    generalChannel.send(streamstope)
    client.user.setActivity("Yester! na Youtubie", {type: "WATCHING"})
}
    else if (command === "botogl") { /* Zmiana tego co oglada BOT */
        message.delete()
        if (!args.length) {
            const bladbotogl = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('Niepoprawne użycie')
            .setDescription('Nastąpiło niepoprawne użycie komendy =botogl')
            .setAuthor('Pomocnik - błędy')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            var generalChannel = client.channels.get("558703773682368524")
            const wartoscibotogl = new Discord.RichEmbed()
            .setColor('#ff005c')
            .setTitle('Numery tekstów "BOT OGLĄDA"')
            .setDescription('Aby ustawić tekst - "BOT OGLĄDA" proszę użyć poniższych wartości')
            .addField('1', 'starego jak rucha matke', true)
            .addField('2', 'oślepianie się lampą bez powodu', true)
            .addField('3', 'Fame MMA', true)
            .addField('4', 'Pewds vs T-series', true)
            .addField('5', 'jakiś mecz', true)
            .addField('6', 'Yester! na YouTubie', true)
            .setTimestamp()
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            message.channel.send(wartoscibotogl)
         return  generalChannel.send(bladbotogl)
        }
        else if (args == "1") {
    message.channel.send("Operacja wykonana prawidłowo")
    const zmianaogl = new Discord.RichEmbed()
    .setColor("#00ffa1")
    .setTitle('Zmiana statusu BOTa - "ogląda"')
    .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
    .setAuthor('Pomocnik - aktywność')
    .setTimestamp()
    .addField('Osoba wywołująca komendę', `${message.author}`, true)
    .addField('Obecny status aktywności BOTa - ogląda', `starego jak rucha matke`, true)
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
    client.user.setActivity(`starego jak rucha matke`, {type: "WATCHING"})
    var generalChannel = client.channels.get("558703773682368524")
    generalChannel.send(zmianaogl)}
    else if (args == "2") {
        message.channel.send("Operacja wykonana prawidłowo")
        const zmianaogl = new Discord.RichEmbed()
        .setColor("#00ffa1")
        .setTitle('Zmiana statusu BOTa - "ogląda"')
        .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
        .setAuthor('Pomocnik - aktywność')
        .setTimestamp()
        .addField('Osoba wywołująca komendę', `${message.author}`, true)
        .addField('Obecny status aktywności BOTa - ogląda', `oślepianie się lampą bez powodu`, true)
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
        client.user.setActivity(`oślepianie się lampą bez powodu`, {type: "WATCHING"})
        var generalChannel = client.channels.get("558703773682368524")
        generalChannel.send(zmianaogl)}
    else if (args == "3") {
            message.channel.send("Operacja wykonana prawidłowo")
            const zmianaogl = new Discord.RichEmbed()
            .setColor("#00ffa1")
            .setTitle('Zmiana statusu BOTa - "ogląda"')
            .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
            .setAuthor('Pomocnik - aktywność')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .addField('Obecny status aktywności BOTa - ogląda', `Fame MMA`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            client.user.setActivity(`Fame MMA`, {type: "WATCHING"})
            var generalChannel = client.channels.get("558703773682368524")
            generalChannel.send(zmianaogl)}
    else if (args == "4") {
                message.channel.send("Operacja wykonana prawidłowo")
                const zmianaogl = new Discord.RichEmbed()
                .setColor("#00ffa1")
                .setTitle('Zmiana statusu BOTa - "ogląda"')
                .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
                .setAuthor('Pomocnik - aktywność')
                .setTimestamp()
                .addField('Osoba wywołująca komendę', `${message.author}`, true)
                .addField('Obecny status aktywności BOTa - ogląda', `Pewds vs T-series`, true)
                .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
                client.user.setActivity(`Pewds vs T-series`, {type: "WATCHING"})
                var generalChannel = client.channels.get("558703773682368524")
                generalChannel.send(zmianaogl)}
    else if (args == "5") {
        message.channel.send("Operacja wykonana prawidłowo")
        const zmianaogl = new Discord.RichEmbed()
        .setColor("#00ffa1")
        .setTitle('Zmiana statusu BOTa - "ogląda"')
        .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
        .setAuthor('Pomocnik - aktywność')
        .setTimestamp()
        .addField('Osoba wywołująca komendę', `${message.author}`, true)
        .addField('Obecny status aktywności BOTa - ogląda', `jakiś mecz`, true)
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
        client.user.setActivity(`jakiś mecz`, {type: "WATCHING"})
        var generalChannel = client.channels.get("558703773682368524")
        generalChannel.send(zmianaogl)}
    else if (args == "6") {
            message.channel.send("Operacja wykonana prawidłowo")
            const zmianaogl = new Discord.RichEmbed()
            .setColor("#00ffa1")
            .setTitle('Zmiana statusu BOTa - "ogląda"')
            .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
            .setAuthor('Pomocnik - aktywność')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .addField('Obecny status aktywności BOTa - ogląda', `Yester! na YouTubie`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            client.user.setActivity(`Yester! na YouTubie`, {type: "WATCHING"})
            var generalChannel = client.channels.get("558703773682368524")
            generalChannel.send(zmianaogl)}
    }
    else if (command === "botslu") { /* Zmiana tego co slucha BOT */
        message.delete()
        if (!args.length) {
            const bladbotogl = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('Niepoprawne użycie')
            .setDescription('Nastąpiło niepoprawne użycie komendy =botslu')
            .setAuthor('Pomocnik - błędy')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            var generalChannel = client.channels.get("558703773682368524")
            const wartoscibotogl = new Discord.RichEmbed()
            .setColor('#ff005c')
            .setTitle('Numery tekstów "BOT SŁUCHA"')
            .setDescription('Aby ustawić tekst - "BOT SŁUCHA" proszę użyć poniższych wartości')
            .addField('1', 'starego jak rucha matke', true)
            .addField('2', 'śpiewu Godlewskich', true)
            .addField('3', 'disco polo', true)
            .addField('4', 'heavy metalu', true)
            .addField('5', 'ryku silników', true)
            .addField('6', 'wiertarki zza ściany', true)
            .setTimestamp()
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            message.channel.send(wartoscibotogl)
         return  generalChannel.send(bladbotogl)
        }
        else if (args == "1") {
    message.channel.send("Operacja wykonana prawidłowo")
    const zmianaogl = new Discord.RichEmbed()
    .setColor("#00ffa1")
    .setTitle('Zmiana statusu BOTa - "słucha"')
    .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
    .setAuthor('Pomocnik - aktywność')
    .setTimestamp()
    .addField('Osoba wywołująca komendę', `${message.author}`, true)
    .addField('Obecny status aktywności BOTa - słucha', `starego jak rucha matke`, true)
    .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
    client.user.setActivity(`starego jak rucha matke`, {type: "LISTENING"})
    var generalChannel = client.channels.get("558703773682368524")
    generalChannel.send(zmianaogl)}
    else if (args == "2") {
        message.channel.send("Operacja wykonana prawidłowo")
        const zmianaogl = new Discord.RichEmbed()
        .setColor("#00ffa1")
        .setTitle('Zmiana statusu BOTa - "słucha"')
        .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
        .setAuthor('Pomocnik - aktywność')
        .setTimestamp()
        .addField('Osoba wywołująca komendę', `${message.author}`, true)
        .addField('Obecny status aktywności BOTa - słucha', `śpiewu Godlewskich`, true)
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
        client.user.setActivity(`śpiewu Godlewskich`, {type: "LISTENING"})
        var generalChannel = client.channels.get("558703773682368524")
        generalChannel.send(zmianaogl)}
    else if (args == "3") {
            message.channel.send("Operacja wykonana prawidłowo")
            const zmianaogl = new Discord.RichEmbed()
            .setColor("#00ffa1")
            .setTitle('Zmiana statusu BOTa - "słucha"')
            .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
            .setAuthor('Pomocnik - aktywność')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .addField('Obecny status aktywności BOTa - słucha', `disco polo`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            client.user.setActivity(`disco polo`, {type: "LISTENING"})
            var generalChannel = client.channels.get("558703773682368524")
            generalChannel.send(zmianaogl)}
    else if (args == "4") {
                message.channel.send("Operacja wykonana prawidłowo")
                const zmianaogl = new Discord.RichEmbed()
                .setColor("#00ffa1")
                .setTitle('Zmiana statusu BOTa - "słucha"')
                .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
                .setAuthor('Pomocnik - aktywność')
                .setTimestamp()
                .addField('Osoba wywołująca komendę', `${message.author}`, true)
                .addField('Obecny status aktywności BOTa - słucha', `heavy metalu`, true)
                .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
                client.user.setActivity(`heavy metalu`, {type: "LISTENING"})
                var generalChannel = client.channels.get("558703773682368524")
                generalChannel.send(zmianaogl)}
    else if (args == "5") {
        message.channel.send("Operacja wykonana prawidłowo")
        const zmianaogl = new Discord.RichEmbed()
        .setColor("#00ffa1")
        .setTitle('Zmiana statusu BOTa - "słucha"')
        .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
        .setAuthor('Pomocnik - aktywność')
        .setTimestamp()
        .addField('Osoba wywołująca komendę', `${message.author}`, true)
        .addField('Obecny status aktywności BOTa - słucha', `ryku silników`, true)
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
        client.user.setActivity(`ryku silników`, {type: "LISTENING"})
        var generalChannel = client.channels.get("558703773682368524")
        generalChannel.send(zmianaogl)}
    else if (args == "6") {
            message.channel.send("Operacja wykonana prawidłowo")
            const zmianaogl = new Discord.RichEmbed()
            .setColor("#00ffa1")
            .setTitle('Zmiana statusu BOTa - "słucha"')
            .setDescription('Nastąpiła zmiana opisu aktywności BOTa')
            .setAuthor('Pomocnik - aktywność')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .addField('Obecny status aktywności BOTa - słucha', `wiertarki zza ściany`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            client.user.setActivity(`wiertarki zza ściany`, {type: "LISTENING"})
            var generalChannel = client.channels.get("558703773682368524")
            generalChannel.send(zmianaogl)}
    }
    else if (command === "helpa") {
        const pomocadm = new Discord.RichEmbed()
        .setColor('#00ffcc')
        .setTitle('Dostępne komendy')
        .setDescription('Spójrz niżej')
        .addField('=zaproszenie', 'Komenda wyświetlająca link zaproszenia', true)
        .addField('=warn @uzytkownik#1234', 'Komenda umożliwiająca ostrzeganie za łamanie regulaminu', true)
        .addField('=unwarn @uzytkownik#1234', 'Komenda umozliwiająca cofanie ostrzeżeń', true)
        .addField('=streamstart', `Komenda wysyłająca przypomnienie o streamie Yester'a!`, true)
        .addField('=streamstop', `Komenda wysyłająca informację o zakończeniu streama Yester'a!`, true)
        .addField('=botogl 1-6', 'Komenda zmieniająca statusu aktywności (ogląda) bota. Wpisanie komendy bez wartości umożliwia sprawdzenie opcji', true)
        .addField('=botslu 1-6', 'Komenda zmieniająca statusu aktywności (słucha) bota. Wpisanie komendy bez wartości umożliwia sprawdzenie opcji', true)
        .addField('=czysc 2-100', 'Komenda umożliwiająca masowe usuwanie wiadomości', true)
        .addField('=alexxstart','Komenda wysyłająca przypomnienie o streamie AleXXa', true)
        .addField('=alexxstop', `Komenda wysyłająca informację o zakończeniu streama AleXXa`, true)
        .setTimestamp()
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg')
        message.channel.send(pomocadm)
    }
    else if (command === "czysc") {
        message.delete()
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('Proszę wpisać liczbę wiadomości do usunięcia!');
        }
        else if (amount < 2 || amount > 100) {
            return message.reply('Proszę wpisać wartość od 2 do 100.');
        }
        message.channel.bulkDelete(amount);
        const wyczyszczono = new Discord.RichEmbed()
        .setColor('#4bf58e')
        .setTitle('Wyczyszczono kanał')
        .setDescription('Zostało wykonane czyszczenie kanału')
        .setAuthor('Pomocnik - czyszczenie')
        .addField('Wyczyszczono przez', `${message.author}`, true)
        .addField(`Wyczyszczony kanał`, `${message.channel}`, true)
        .addField('Liczba wyczyszczonych wiadomości', `${amount}`)
        .setTimestamp()
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg')
        var generalChannel = client.channels.get("558703773682368524")
            generalChannel.send(wyczyszczono)
    }
    else if (command === "kick") {
        if (!args.length) {
            message.delete()
            const bladkick = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('Niepoprawne użycie')
            .setDescription('Nastąpiło niepoprawne użycie komendy =kick`')
            .setAuthor('Pomocnik - błędy')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            var generalChannel = client.channels.get("558703773682368524")
            message.channel.send(`${message.author} Niepoprawne użycie. Proszę oznaczyć osobę która ma zostać wyrzucona.`)
         return  generalChannel.send(bladkick)
        }
        message.delete()
        let member = message.mentions.members.first();
        const taggedUser = message.mentions.users.first();
        member.kick()
        const wyrzucono = new Discord.RichEmbed()
        .setColor('#d30700')
        .setTitle('Wyrzucono użytkownika')
        .setDescription('Użytkownik został wyrzucony z powodu naruszenia regulaminu')
        .setAuthor('Pomocnik - wyrzucanie')
        .addField('Wyrzucono przez', `${message.author}`, true)
        .addField('Wyrzucony użytkownik', `${taggedUser.username}`, true)
        .setTimestamp()
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg')
        var generalChannel = client.channels.get("558703773682368524")
        generalChannel.send(wyrzucono)
    }
    else if (command === "ban") {
        if (!args.length) {
            message.delete()
            const bladkick = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('Niepoprawne użycie')
            .setDescription('Nastąpiło niepoprawne użycie komendy =ban')
            .setAuthor('Pomocnik - błędy')
            .setTimestamp()
            .addField('Osoba wywołująca komendę', `${message.author}`, true)
            .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
            var generalChannel = client.channels.get("558703773682368524")
            message.channel.send(`${message.author} Niepoprawne użycie. Proszę oznaczyć osobę która ma zostać zbanowana.`)
         return  generalChannel.send(bladkick)
        }
        message.delete()
        let member = message.mentions.members.first();
        const taggedUser = message.mentions.users.first();
        member.ban()
        const zbanowano = new Discord.RichEmbed()
        .setColor('#000000')
        .setTitle('Zbanowano użytkownika')
        .setDescription('Użytkownik został zbanowany z powodu naruszenia regulaminu')
        .setAuthor('Pomocnik - banowanie')
        .addField('Zbanowano przez', `${message.author}`, true)
        .addField('Zbanowany użytkownik', `${taggedUser.username}`, true)
        .setTimestamp()
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg')
        var generalChannel = client.channels.get("558703773682368524")
        generalChannel.send(zbanowano)
    }
    else if (command === "alexxstart") { /* Przypomnienie o streamie*/
        message.delete()
        const streamstartee = new Discord.RichEmbed()
        .setColor('#ffa803')
        .setTitle('AleXX właśnie zaczął streamować')
        .setAuthor('Przypominajka')
        .setThumbnail('https://lh3.googleusercontent.com/b90RoGevncC_OL11TGv6_RiVdh9Az3kPCo0FgRk6FX2W7jAfxBKqcKjjLtwO5q5mGOMhvQRnOA4R_A=w176-h176-n-o-rw')
        .setDescription('Kliknij [tutaj](https://www.youtube.com/channel/UCvgFvKUpfaFOMwx4p4yCyUQ) aby przejść do jego kanału, zostawić suba z dzwoneczkiem :heart:')
        .addField('Zobacz też jego Instagram', 'Znajdziesz [tu](https://www.instagram.com/de4th.inside/) wiele zdjęć z życia AleXXa spoza komputera! :smile:', true)
        .addField('Ten pan ma również Steama', 'Zaproś go na [Steamie](https://steamcommunity.com/id/jubelox/) jeśli chciałbyś z nim kiedyś zagrać :joy:', true)
        .addField('Oznaczę was żebyście widzieli :grin:', '@here', true)
        .setTimestamp()
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
        var generalChannel = client.channels.get("558701163067998219")
        generalChannel.send(streamstartee)
        client.user.setActivity("Stream AleXX'a", {type: "WATCHING"})
    }
        else if (command === "alexxstop") { /* Koniec streama */
        message.delete()
        const streamstopee = new Discord.RichEmbed()
        .setColor('#ffa803')
        .setTitle('AleXX właśnie skończył streamować')
        .setAuthor('Przypominajka')
        .setDescription('Ale kliknij [tutaj](https://www.youtube.com/channel/UCvgFvKUpfaFOMwx4p4yCyUQ) aby przejść do jego kanału i zostawić suba z dzwoneczkiem :heart:')
        .addField('Zobacz też jego Instagram', 'Znajdziesz [tu](https://www.instagram.com/de4th.inside/) wiele zdjęć z życia AleXXa spoza komputera! :smile:', true)
        .addField('Ten pan ma również Steama', 'Zaproś go na [Steamie](https://steamcommunity.com/id/jubelox/) jeśli chciałbyś z nim kiedyś zagrać :joy:', true)
        .addField('Tu też was oznaczę :joy:', '@here', true)
        .setTimestamp()
        .setFooter('Wersja 0.5    Autor: AleXX#2892', 'https://i.pinimg.com/originals/3e/f9/82/3ef9822fbc74615ee4d0c94db992f16f.jpg');
        var generalChannel = client.channels.get("558701163067998219")
        generalChannel.send(streamstopee)
        client.user.setActivity("Yester! na Youtubie", {type: "WATCHING"})
    }
}})
