//переменные

const root = document.querySelector('.page');
const headerTotalValue = root.querySelector('.header__total');
const totalValue = root.querySelector('.total__number');
const table = root.querySelector('.table');
const mainHead = document.querySelector('.page__header');


//функции

// записывает данные о всего заболевших
function track (arr) {
  let trackerValue = 0;
  for (let key of arr) {
    trackerValue += key.confirmed;
  }

  totalValue.textContent = trackerValue;
  headerTotalValue.textContent = trackerValue;
}


// сортирует по убыванию и записывает их в таблицу
function tableInfo (arr) {
  let arrPlus = [{
    active: 0,
    confirmed: 0,
    countryRegion: "US",
    deaths: 0,
    provinceState: null,
    recovered: 0
  },
  {
    active: 0,
    confirmed: 0,
    countryRegion: "China",
    deaths: 0,
    provinceState: null,
    recovered: 0
  },
  {
    active: 0,
    confirmed: 0,
    countryRegion: "Canada",
    deaths: 0,
    provinceState: null,
    recovered: 0
  },
  {
    active: 0,
    confirmed: 0,
    countryRegion: "United Kingdom",
    deaths: 0,
    provinceState: null,
    recovered: 0
  },
  {
    active: 0,
    confirmed: 0,
    countryRegion: "Netherlands",
    deaths: 0,
    provinceState: null,
    recovered: 0
  },
  {
    active: 0,
    confirmed: 0,
    countryRegion: "Australia",
    deaths: 0,
    provinceState: null,
    recovered: 0
  },
  {
    active: 0,
    confirmed: 0,
    countryRegion: "France",
    deaths: 0,
    provinceState: null,
    recovered: 0
  },
  {
    active: 0,
    confirmed: 0,
    countryRegion: "Denmark",
    deaths: 0,
    provinceState: null,
    recovered: 0
  }, ...arr
];
  arr.forEach((kek)=> {
      // if(kek.provinceState) {
      //   if(kek.countryRegion === 'US' && kek.provinceState === null){
      //     arrPlus.find((el)=>{
      //       el.countryRegion === 'US';
      //       return el.confirmed+=kek.confirmed;
      //     })
      //   }
      //   if(kek.countryRegion === 'China' && kek.provinceState === null){
      //     arrPlus.find((el)=>{
      //       el.countryRegion === 'China';
      //       return el.confirmed+=kek.confirmed;
      //     })
      //   }
      //   if(kek.countryRegion === 'Canada' && kek.provinceState === null){
      //     arrPlus.find((el)=>{
      //       el.countryRegion === 'Canada';
      //       return el.confirmed+=kek.confirmed;
      //     })
      //   }
      //   if(kek.countryRegion === 'United Kingdom' && kek.provinceState === null){
      //     arrPlus.find((el)=>{
      //       el.countryRegion === 'United Kingdom';
      //       return el.confirmed+=kek.confirmed;
      //     })
      //   }
      //   if(kek.countryRegion === 'Netherlands' && kek.provinceState === null){
      //     arrPlus.find((el)=>{
      //       el.countryRegion === 'Netherlands';
      //       return el.confirmed+=kek.confirmed;
      //     })
      //   }
      //   if(kek.countryRegion === 'Australia' && kek.provinceState === null){
      //     arrPlus.find((el)=>{
      //       el.countryRegion === 'Australia';
      //       return el.confirmed+=kek.confirmed;
      //     })
      //   }
      //   if(kek.countryRegion === 'France' && kek.provinceState === null){
      //     arrPlus.find((el)=>{
      //       el.countryRegion === 'France';
      //       return el.confirmed+=kek.confirmed;
      //     })
      //   }
      //   if(kek.countryRegion === 'Denmark' && kek.provinceState === null){
      //     arrPlus.find((el)=>{
      //       el.countryRegion === 'Denmark';
      //       return el.confirmed+=kek.confirmed;
      //     })
      //   }
      // }
    switch (kek.countryRegion) {
      case 'US':
        arrPlus[0].confirmed += kek.confirmed;
        arrPlus[0].deaths += kek.deaths;
        arrPlus[0].recovered += kek.recovered;
        kek.confirmed = 0;
        kek.deaths = 0;
        kek.recovered = 0;
        break;
      case 'China':
        arrPlus[1].confirmed+=kek.confirmed;
        arrPlus[1].deaths+=kek.deaths;
        arrPlus[1].recovered+=kek.recovered;
        kek.confirmed = 0;
        kek.deaths = 0;
        kek.recovered = 0;
        break;
      case 'Canada':
        arrPlus[2].confirmed+=kek.confirmed;
        arrPlus[2].deaths+=kek.deaths;
        arrPlus[2].recovered+=kek.recovered;
        kek.confirmed = 0;
        kek.deaths = 0;
        kek.recovered = 0;
        break;
      case 'United Kingdom':
        arrPlus[3].confirmed+=kek.confirmed;
        arrPlus[3].deaths+=kek.deaths;
        arrPlus[3].recovered+=kek.recovered;
        kek.confirmed = 0;
        kek.deaths = 0;
        kek.recovered = 0;
        break;
      case 'Netherlands':
        arrPlus[4].confirmed+=kek.confirmed;
        arrPlus[4].deaths+=kek.deaths;
        arrPlus[4].recovered+=kek.recovered;
        kek.confirmed = 0;
        kek.deaths = 0;
        kek.recovered = 0;
        break;
      case 'Australia':
        arrPlus[5].confirmed+=kek.confirmed;
        arrPlus[5].deaths+=kek.deaths;
        arrPlus[5].recovered+=kek.recovered;
        kek.confirmed = 0;
        kek.deaths = 0;
        kek.recovered = 0;
        break;
      case 'France':
        arrPlus[6].confirmed+=kek.confirmed;
        arrPlus[6].deaths+=kek.deaths;
        arrPlus[6].recovered+=kek.recovered;
        kek.confirmed = 0;
        kek.deaths = 0;
        kek.recovered = 0;
        break;
      case 'Denmark':
        arrPlus[7].confirmed+=kek.confirmed;
        arrPlus[7].deaths+=kek.deaths;
        arrPlus[7].recovered+=kek.recovered;
        kek.confirmed = 0;
        kek.deaths = 0;
        kek.recovered = 0;
        break;
      case 'Italy':
        break;
      }
    })
    
    arrPlus.sort((a,b) => {
      return b.confirmed - a.confirmed;
    })
    

    for (let i=0; i <=9; i++) {
      const table = document.querySelector('.table');

      const row = document.createElement('tr');
      row.classList.add('table__row');
      row.classList.add('table__row_type_heading');

      const name = document.createElement('td');
      name.classList.add('table__data');
      name.classList.add('countryRegion');

      const confirmed = document.createElement('td');
      confirmed.classList.add('table__data');
      confirmed.classList.add('confirmed');

      const deaths = document.createElement('td');
      deaths.classList.add('table__data');
      deaths.classList.add('deaths');

      const recovered = document.createElement('td');
      recovered.classList.add('table__data');
      recovered.classList.add('recovered');

      row.appendChild(name);
      row.appendChild(confirmed);
      row.appendChild(deaths);
      row.appendChild(recovered);

      table.appendChild(row);

      name.textContent = arrPlus[i].countryRegion;
      confirmed.textContent = arrPlus[i].confirmed;
      deaths.textContent = arrPlus[i].deaths;
      recovered.textContent = arrPlus[i].recovered;
    }

}
//сортирует, потом выводит значения по смертности и вылеченых
function diagram (arr) {
  let newArr = arr.filter((el) => {
    return el.confirmed >= 100;
        
  });
  
  newArr.sort((a,b)=> {
    b = (b.deaths / b.confirmed) * 100;
    a = (a.deaths / a.confirmed) * 100;
    return b - a;
  });

  const cOne = document.querySelector('.countryOne');
  const cTwo = document.querySelector('.countryTwo');
  const cThree = document.querySelector('.countryThree');

  const oneDead = document.querySelector('.firstdead');
  const twoDead = document.querySelector('.seconddead');
  const threeDead = document.querySelector('.thirddead');

  const oneHeal = document.querySelector('.oneheal');
  const twoHeal = document.querySelector('.twoheal');
  const threeHeal = document.querySelector('.threeheal');

  const onelineH = document.querySelector('.oneHealLine');
  const onelineD = document.querySelector('.oneDeadLine');
  const twolineH = document.querySelector('.twoHealLine');
  const twolineD = document.querySelector('.twoDeadLine');
  const threelineH = document.querySelector('.threeHealLine');
  const threelineD = document.querySelector('.threeDeadline');

  cOne.textContent = newArr[0].countryRegion;
  cTwo.textContent = newArr[1].countryRegion;
  cThree.textContent = newArr[2].countryRegion;

  oneDead.textContent = (newArr[0].deaths / newArr[0].confirmed).toFixed(2) * 100 + '%';
  twoDead.textContent = (newArr[1].deaths / newArr[1].confirmed).toFixed(2) * 100 + '%';
  threeDead.textContent = (newArr[2].deaths / newArr[2].confirmed).toFixed(2) * 100 + '%';

  oneHeal.textContent = (newArr[0].recovered / newArr[0].confirmed).toFixed(2) * 100 + '%';
  twoHeal.textContent = (newArr[1].recovered / newArr[1].confirmed).toFixed(2) * 100 + '%';
  threeHeal.textContent = (newArr[2].recovered / newArr[2].confirmed).toFixed(2) * 100 + '%';

  onelineD.setAttribute('style', `width: ${oneDead.textContent};`);
  onelineH.setAttribute('style', `width: ${oneHeal.textContent};`);
  twolineD.setAttribute('style', `width: ${twoDead.textContent};`);
  twolineH.setAttribute('style', `width: ${twoHeal.textContent};`);
  threelineD.setAttribute('style', `width: ${threeDead.textContent};`);
  threelineH.setAttribute('style', `width: ${threeHeal.textContent};`);


}

// получаем массив с новыми данными и работаем с деревом
fetch('https://covid19.mathdro.id/api/confirmed', {
  method: 'GET'
})
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((res)=> {
    track(res);
    tableInfo(res);
    diagram(res);

  })
  .catch((err) => {
    console.log(err);
    return Promise.reject(`Ошибка: ${err.message}`);
  });


  // показывает и скрывает шапку
  document.addEventListener('scroll', (e) => {
    if (pageYOffset < 360) {
      mainHead.classList.remove('block');
   } else if (pageYOffset >= 360) {
    
    mainHead.classList.add('block');
  }
})
