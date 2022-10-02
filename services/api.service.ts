import { BASE_URL, VERSION } from "../utils/constants";

export const userToken = async () => {
  const UserData = localStorage.getItem("user_token");
  return `Bearer ${UserData}`;
};

export const callApi = async (endpoint: string, options: any = {}) => {
  const baseUrl = BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}${VERSION}${endpoint}`;
  const UserData = localStorage.getItem("user_token");
  console.log(UserData, "user data token");

  const response = await fetch(url, {
    ...options,
    method: "GET",
    headers: {
      Authorization: `Bearer ${UserData}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return response.json();
};

export const callApiWithoutToken = async (
  endpoint: string,
  options: any = {}
) => {
  const baseUrl = BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}${VERSION}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return response.json();
};

export const callApiGetWithoutToken = async (
  endpoint: string,
  options: any = {}
) => {
  const baseUrl = BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}${VERSION}${endpoint}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return response.json();
};

export const updateProfileApi = async (endpoint: string, options: any = {}) => {
  //   console.log(endpoint, options);
  const formdata = new FormData();
  formdata.append("name", options.userinfo);
  formdata.append("user_image", options.img);
  const UserData = JSON.parse(localStorage.getItem("user_info"));

  const id = UserData.id;

  const requestOptions = {
    method: "PATCH",
    body: formdata,
  };

  await fetch(`${BASE_URL}${VERSION}${endpoint}${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      UserData.name = options.userinfo;

      UserData.user_image = options.img;
      console.log(UserData);
      localStorage.setItem("user_info", JSON.stringify(UserData));
    })
    .catch((error) => console.log("error", error));
};
// export const callApifatchWithoutToken = async (endpoint: string, options
//             :any = {}) => {
//             console.log(options,"options");

//                 const baseUrl = BASE_URL || 'http://localhost:3000';
//                 const url = `${baseUrl}${VERSION}${endpoint}`;
//                 // const response = await fetch(url, {
//                 //     method: 'POST',
//                 //     body:
//                 //     headers: {
//                 //     'Content-Type': 'application/json',
//                 //     ...(options.headers || {}),
//                 //     },
//                 // });

//                 return options;

//                 }

export const searchApi = async (endpoint: string, options: any = {}) => {
  //   console.log(endpoint, options);
  // const formdata = new FormData();
  // formdata.append("name", options.searchKey);
  var raw = JSON.stringify({
    search_keyword: options.searchValue,
  });

  // const UserData = JSON.parse(localStorage.getItem("user_info"));

  // const id = UserData.id;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: raw,
  };

  const response = await fetch(
    `${BASE_URL}${VERSION}${endpoint}`,
    requestOptions
  );
  return response.json();
};
export const mediaViewCountApi = async (
  endpoint: string,
  options: any = {}
) => {
  console.log(options.mediaId, "options.mediaId");
  // const formdata = new FormData();
  // formdata.append("name", options.searchKey);
  var raw = JSON.stringify({
    media_content_id: options.mediaId,
  });

  const UserData = localStorage.getItem("user_token");
  console.log(UserData, "token");

  // const id = UserData.id;

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UserData}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: raw,
  };

  const response = await fetch(
    `${BASE_URL}${VERSION}${endpoint}`,
    requestOptions
  );
  return response.json();
};
export const generateotp = async (endpoint: string, options: any = {}) => {
  console.log(options.mediaId, "options.mediaId");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    sender: "8809612558888",
    receiver: options.num,
    notification_type: "otp",
    send_by: "sms",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch(
    `${BASE_URL}${VERSION}${endpoint}`,
    requestOptions
  );
  return response.json();
};
export const varifyotp = async (endpoint: string, options: any = {}) => {
  console.log(options, "options");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    sender: "8809612558888",
    receiver: options.loginData,
    notification_text: options.otp,
    notification_type: "otp",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch(
    `${BASE_URL}${VERSION}${endpoint}`,
    requestOptions
  );
  return response.json();
};
export const createUserProfile = async (
  endpoint: string,
  options: any = {}
) => {
  console.log(options, "options api heat");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    phone: options.userNum,
    name: options.userName,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch(
    `${BASE_URL}${VERSION}${endpoint}`,
    requestOptions
  );
  return response.json();
};
