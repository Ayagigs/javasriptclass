 const users = [{
    "id": 1,
    "first_name": "Danit",
    "last_name": "Hadcroft",
    "email": "dhadcroft0@umich.edu",
    "gender": "Female",
    "country": "Paraguay",
    "address": {
      "state": null,
      "city": "Cerrito"
    },
    "cars": [
  
    ],
    "wallet": "19iurBgM4Ju3GbfLhg7nsusavs6mcx6mKd"
  }, {
    "id": 2,
    "first_name": "Heddi",
    "last_name": "Aujouanet",
    "email": "haujouanet1@biblegateway.com",
    "gender": "Female",
    "country": "Philippines",
    "address": {
      "state": null,
      "city": "Quisao"
    },
    "cars": [
      "Lexus",
      "Ram",
      "BMW",
      "BMW"
    ],
    "wallet": "18XBwGHdSmPRzst2MK34KfJWt6NBm2sS34"
  }, {
    "id": 3,
    "first_name": "Sela",
    "last_name": "Turnor",
    "email": "sturnor2@unicef.org",
    "gender": "Female",
    "country": "Sweden",
    "address": {
      "state": "Blekinge",
      "city": "Olofström"
    },
    "cars": [
      "Chevrolet",
      "Chevrolet",
      "Buick",
      "Hyundai"
    ],
    "wallet": "1DE4kjpwQSfJCzA1qYjPoeYbteERQBpmHX"
  }, {
    "id": 4,
    "first_name": "Elwin",
    "last_name": "Calliss",
    "email": "ecalliss3@tiny.cc",
    "gender": "Male",
    "country": "New Zealand",
    "address": {
      "state": null,
      "city": "Waitara"
    },
    "cars": [
      "Chevrolet",
      "Mercedes-Benz",
      "Scion",
      "Acura",
      "Suzuki"
    ],
    "wallet": "1JAQcWjn27evZ9Eyu1v2eb7XKSP8k3r6FA"
  }, {
    "id": 5,
    "first_name": "Burtie",
    "last_name": "MacCarter",
    "email": "bmaccarter4@parallels.com",
    "gender": "Male",
    "country": "Peru",
    "address": {
      "state": null,
      "city": "Longar"
    },
    "cars": [
  
    ],
    "wallet": "1EP2hx7jN1yvVAJnyPxn8dGyZsRhXSBQmD"
  }, {
    "id": 6,
    "first_name": "Bret",
    "last_name": "Brumham",
    "email": "bbrumham5@bandcamp.com",
    "gender": "Male",
    "country": "Russia",
    "address": {
      "state": null,
      "city": "Krasnyy Klyuch"
    },
    "cars": [
  
    ],
    "wallet": "1KgtCiPKygGcpMzfEecZV9ioKoYYDBHXYF"
  }, {
    "id": 7,
    "first_name": "Lamond",
    "last_name": "Vellacott",
    "email": "lvellacott6@intel.com",
    "gender": "Male",
    "country": "Guatemala",
    "address": {
      "state": null,
      "city": "San Marcos"
    },
    "cars": [
      "Mercury",
      "Honda"
    ],
    "wallet": "13ywJtX9YH2SjrWcUp7MqZKR65XL4q95Ki"
  }, {
    "id": 8,
    "first_name": "Floyd",
    "last_name": "Kulis",
    "email": "fkulis7@hud.gov",
    "gender": "Male",
    "country": "Russia",
    "address": {
      "state": null,
      "city": "Nakhabino"
    },
    "cars": [
      "Volkswagen",
      "Pontiac",
      "Chevrolet",
      "Nissan",
      "Suzuki"
    ],
    "wallet": "16QVpuWA5AAZFLv2p2Jw3e8UHuvYcjpUkQ"
  }, {
    "id": 9,
    "first_name": "Claire",
    "last_name": "Quernel",
    "email": "cquernel8@admin.ch",
    "gender": "Male",
    "country": "Indonesia",
    "address": {
      "state": null,
      "city": "Cibojong"
    },
    "cars": [
  
    ],
    "wallet": "1A9nxJf2cLBy5orLD2DT8thVG26wPeuKTN"
  }, {
    "id": 10,
    "first_name": "Mersey",
    "last_name": "McCloud",
    "email": "mmccloud9@istockphoto.com",
    "gender": "Polygender",
    "country": "Indonesia",
    "address": {
      "state": null,
      "city": "Tumpang"
    },
    "cars": [
      "Dodge"
    ],
    "wallet": "1Wj8DSaBFwPNhcjgEWccjGYsiKvwx9ZCM"
  }]


  //find
  const getUser = (id)=>{
    const user =  users.find(user=>user.id===id);
    if(userid){
        return user;
    }
    return `User with id of ${id} not found`;
  }

//   console.log(getUser(30));

  //display users that has more than  3 cars

  const userwithan3Cars = ()=>{
    let result  = users.filter(user=>user.cars.length > 3);
    return result;
  }
console.log(userwithan3Cars())

