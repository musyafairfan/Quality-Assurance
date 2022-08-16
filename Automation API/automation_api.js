const request_barru = require("supertest")("http://barru.pythonanywhere.com"); //url atau endpoint yang dituju
const expect = require("chai").expect; //import library chai untuk validasi
describe("POST User Info", function () { //deskripsikan function untuk test scenario
 it("Success Login with valid email and password", async function () { //test case
 const response = await request_barru //await untuk menunggu request endpoint hingga sukses
 .post("/login") //tipe http request
 .send({ email: "musyafairfan1000@gmail.com", password: "sukses123" });
//data yang dikirim
 
 //expect untuk validasi respon
 expect(response.body.status).to.eql('SUCCESS_LOGIN');
 expect(response.body.data).to.eql("Welcome Musyafa' Irfan");
 expect(response.body.message).to.eql('Anda Berhasil Login');
 expect(response.body).to.include.keys("data", "message", "status", "credentials"); 
 });

 it("Failed Login with invalid email and valid password", async function () { //test case
    const response = await request_barru //await untuk menunggu request endpoint hingga sukses
    .post("/login") //tipe http request
    .send({ email: "musyafairfan1000", password: "sukses123" });
   //data yang dikirim
    
    //expect untuk validasi respon
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.data).to.eql("Email tidak valid");
    expect(response.body.message).to.eql('Cek kembali email anda');
    expect(response.body).to.include.keys("data", "message", "status"); 
    });
 it("Failed Login with valid email and invalid password", async function () { //test case
        const response = await request_barru //await untuk menunggu request endpoint hingga sukses
        .post("/login") //tipe http request
        .send({ email: "musyafairfan1000@gmail.com", password: "sukses12345" });
       //data yang dikirim
        
        //expect untuk validasi respon
        expect(response.body.status).to.eql('FAILED_LOGIN');
        expect(response.body.data).to.eql("User's not found");
        expect(response.body.message).to.eql('Email atau Password Anda Salah');
        expect(response.body).to.include.keys("data", "message", "status"); 
    });
   
 it("Failed Login with email not registered", async function () { //test case
    const response = await request_barru //await untuk menunggu request endpoint hingga sukses
    .post("/login") //tipe http request
    .send({ email: "musyafairfan@gmail.com", password: "yuhuuu123" });
   //data yang dikirim
    
    //expect untuk validasi respon
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.data).to.eql("User's not found");
    expect(response.body.message).to.eql('Email atau Password Anda Salah');
    expect(response.body).to.include.keys("data", "message", "status"); 
    });
    
it("Failed Login with empty email and password", async function () { //test case
    const response = await request_barru //await untuk menunggu request endpoint hingga sukses
    .post("/login") //tipe http request
    .send({ email: "", password: "" });
   //data yang dikirim
    
    //expect untuk validasi respon
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.data).to.eql("Email tidak valid");
    expect(response.body.message).to.eql('Cek kembali email anda');
    expect(response.body).to.include.keys("data", "message", "status"); 
    });

it("Failed Login with empty email and valid password", async function () { //test case
    const response = await request_barru //await untuk menunggu request endpoint hingga sukses
    .post("/login") //tipe http request
    .send({ email: "", password: "sukses123" });
   //data yang dikirim
    
    //expect untuk validasi respon
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.data).to.eql("Email tidak valid");
    expect(response.body.message).to.eql('Cek kembali email anda');
    expect(response.body).to.include.keys("data", "message", "status"); 
    });

it("Failed Login with valid email and empty password", async function () { //test case
    const response = await request_barru //await untuk menunggu request endpoint hingga sukses
    .post("/login") //tipe http request
    .send({ email: "musyafairfan1000@gmail.com", password: "" });
   //data yang dikirim
    
    //expect untuk validasi respon
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.data).to.eql("User's not found");
    expect(response.body.message).to.eql('Email atau Password Anda Salah');
    expect(response.body).to.include.keys("data", "message", "status"); 
    });
});