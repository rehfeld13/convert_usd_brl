const inputValue = document.querySelector('#inputValue')
const buttonEnviar = document.querySelector('#buttonEnviar')
const result = document.querySelector('#result')


buttonEnviar.addEventListener('click',()=>{
  const number = inputValue.value
    
  if (isNaN(number)) {
        alert("Entrada inválida. Digite apenas números.");
        inputValue.value = ''
    }
    else if(!isNaN(number)){
      
      const myHeaders = new Headers();
      myHeaders.append("apikey", "EVQIpn1pkg2I2B0kZEQ34OLJini2IFIV");
    
      const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then(response => response.json())
      .then(data =>{
        const taxa = data.rates['BRL']
    
        const resultado = number * taxa
    
        result.innerHTML = `O valor convertido é R$ ${resultado.toFixed(2)} `
      })
        .catch(error => console.log('API indisponível', error));
    }
})
