const key = "4e670ef9dc58d53a05f56c2b0edc49a9"


function mostrarTela(dados) {
    document.querySelector(".tempo").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp)  + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity = "Umidade: " +dados.main.humidity+ "% "
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    console.log(dados)

    mostrarTela(dados)
}

function buscar() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}