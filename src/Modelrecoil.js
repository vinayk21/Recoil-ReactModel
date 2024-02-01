import { atom } from "recoil";

export const modellogin = atom({
  key: "logindata",
  default: false,
});
export const modelrg = atom({
  key: "rgdata",
  default: false,
});
export const modelabout = atom({
  key: "aboutdata",
  default: false, 
});
export const modelhome = atom({
  key: "modelhome",
  default: false,
});
export const modelprofile = atom({
  key: "profiledata",
  default: false,
});
export const closebtn = atom({
  key: "close",
  default: false,
});
export const rgsdata = atom({
  key:"registrationsdata",
  default:[],
})
export const profilebtn = atom({
  key:"profilebtn",
  default: false,
})
export const loginbtn = atom({
  key:"loginbtn",
  default:true,
})
export const registrationbtn = atom({
  key:"rgbtn",
  default:true,
})
export const displaybtn = atom({
  key:"displaybtn",
  default:false,
})
export const Homebtn = atom({
  key:"homebtn",
  default:false,
})
export const masteruserinfo = atom({
  key:"masteruserinfo",
  default:[{Emailmaster:"master123@gmail.com",Passwordmaster:"123456"}],
})
export const masteruserinfoforprofile = atom({
  key:"profileinfo",
  default:[{Email:"vinukamaliya4428@gmail.com",MobileNo:"9825774429",Name:"vinay",Password:"1234"},
  {Email:"ajayahir3228@gmail.com",MobileNo:"9978773652",Name:"ajay",Password:"2534"},
  {Email:"rambhammar6528@gmail.com",MobileNo:"2598774412",Name:"ram",Password:"9634"},
  {Email:"shailesh8290@gmail.com",MobileNo:"9498774475",Name:"shailesh",Password:"9534"},
  {Email:"raghu78428@gmail.com",MobileNo:"8569774492",Name:"raghu",Password:"8934"},
  {Email:"monikakamaliya4428@gmail.com",MobileNo:"7531774475",Name:"monika",Password:"1234"},
]
})
export const prfinfo = atom({
  key:"prfinfoss",
  default:true,
})
export const profileinfomaster = atom({
  key:"profileinfomasterfor",
  default:false,
})
export const alllogindata = atom({
  key:"alllogindata",
  default:null,
})