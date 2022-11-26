  



async function restcountries(){

   
    let res = await fetch("https://restcountries.com/v3.1/all")  //rest country
    let res2=await res.json()
   //  console.log(res2)
   //  console.log(res2.length-20)
    let lan = res2.length-20
    
    let hongkonglan=res2[lan].latlng[0]
    let hongkonglng=res2[lan].latlng[1]
   //  console.log(hongkonglan)
   //  console.log(hongkonglng)
   //  console.log(res2[lan].name)
  

    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${hongkonglan}&lon=${hongkonglng}&appid=62b0ccdf72c618c494391a661701e918`)
    let weather2 = await weather.json()
    console.log(weather2)                                           //weather report
    console.log(weather2.sys.country)
    console.log(weather2.main.humidity)
    console.log(weather2.main.temp)
    console.log(weather2.weather[0].description)

      let country=document.getElementById("country").innerHTML=`<b>THE COUNTRY IS:${weather2.sys.country}</b>`
      let humidity=document.getElementById("humidity").innerHTML=`<b>THE HUMIDITY IS:${weather2.main.humidity}</b>`
      let temp=document.getElementById("temp").innerHTML=`<b>THE TEMP IS:${weather2.main.temp}</b>`
      let description=document.getElementById("description").innerHTML=`<b>THE DESCRIPTION IS:${weather2.weather[0].description}</b>`
    
   
   }restcountries()

  


async function restcountries1(){
   let res3= await fetch("https://restcountries.com/v3.1/all")
   let res4=await res3.json()
   // console.log(res4)
   // console.log(res4.length-100)
   let lan1 = res4.length-100
   
   let morlan1=res4[lan1].latlng[0]
   let morlng2=res4[lan1].latlng[1]
   // console.log(morlan1)
   // console.log(morlng2)
   // console.log(res4[lan1].name)



    let weather3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${morlan1}&lon=${morlng2}&appid=62b0ccdf72c618c494391a661701e918`)
    let weather4 = await weather3.json()
    console.log(weather4)
    console.log(weather4.sys.country)
    console.log(weather4.main.humidity)
    console.log(weather4.main.temp)
    console.log(weather4.weather[0].description)

    let country=document.getElementById("country").innerHTML=`<b>THE COUNTRY IS:${weather4.sys.country}</b>`
    let humidity=document.getElementById("humidity").innerHTML=`<b>THE HUMIDITY IS:${weather4.main.humidity}</b>`
    let temp=document.getElementById("temp").innerHTML=`<b>THE TEMP IS:${weather4.main.temp}</b>`
    let description=document.getElementById("description").innerHTML=`<b>THE DESCRIPTIONIS:${weather4.weather[0].description}</b>`
       }restcountries1()




   async function restcountries2(){
   let res5= await fetch("https://restcountries.com/v3.1/all")
   let res6=await res5.json()
   // console.log(res6)
   // console.log(res6.length-50)
   let lan2 = res6.length-50
   
   let bhutanlan1=res6[lan2].latlng[0]
   let bhutanlng2=res6[lan2].latlng[1]
   // console.log(bhutanlan1)
   // console.log(bhutanlng2)
   // console.log(res6[lan2].name)


    let weather5 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${bhutanlan1}&lon=${bhutanlng2}&appid=62b0ccdf72c618c494391a661701e918`)
    let weather6 = await weather5.json()
    console.log(weather6)
    console.log(weather6.sys.country)
    console.log(weather6.main.humidity)
    console.log(weather6.main.temp)
    console.log(weather6.weather[0].description)
    let country=document.getElementById("country").innerHTML=`<b>THE COUNTRY IS:${weather6.sys.country}</b>`
    let humidity=document.getElementById("humidity").innerHTML=`<b>THE HUMIDITY IS:${weather6.main.humidity}</b>`
    let temp=document.getElementById("temp").innerHTML=`<b>THE TEMP IS:${weather6.main.temp}</b>`
    let description=document.getElementById("description").innerHTML=`<b>THE DESCRIPTION IS:${weather6.weather[0].description}</b>`

    }restcountries2()