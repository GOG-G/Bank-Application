class Bank {
    static getaccdetails() {
        var acdetail = {
            100: { name: "User1", acno: 100, pin: 1234, pwd: "qwerty1", balance: 1000 },
            101: { name: "User2", acno: 101, pin: 1234, pwd: "qwerty2", balance: 2000 },
            103: { name: "User3", acno: 103, pin: 1234, pwd: "qwerty3", balance: 3000 }
        }
        return acdetail;
    }


    static login() {
        var acno = document.querySelector("#ano").value;
        var pwd = document.querySelector("#pwd").value;
        try {
            if (isNaN(acno)) throw "Invalid Account Number";
        }
        catch (err) {
            alert(err)
        }
        let data = Bank.getaccdetails()
        if (acno in data) {
            let datapwd = data[acno].pwd;
            if (datapwd == pwd) {
                alert("Login Successful");
               window.location.href = "db.html";
            }
            else
                alert("Incorrect Password");
        }
        else
            alert("User Doesn't Exist");
    }


    static deposit() {
        var acno = document.querySelector("#ano").value;
        var pin = document.querySelector("#pin").value;
      var amt = Number(document.querySelector("#amt").value);
        let data=Bank.getaccdetails();
        if(acno in data) {
            let datapin=data[acno].pin;
            if(pin==datapin){

            data[acno].balance+=amt;
            alert("Ammount Has Been Credited To Your Account");
            alert(data[acno].balance);
        }
        else
        alert("Invalid Pin")
    }
    else
    alert("Incorrect Details")

        }


        static withdraw() {
            var acno = document.querySelector("#ano").value;
            var pin = document.querySelector("#pin").value;
          var amt = Number(document.querySelector("#amt").value);
            let data=Bank.getaccdetails();
            if(acno in data) {
                let datapin=data[acno].pin;
                if(pin==datapin){
    
                data[acno].balance-=amt;
                alert("Ammount Has Been Debited From Your Account");
                alert(data[acno].balance);
            }
            else
            alert("Invalid Pin")
        }
        else
        alert("Incorrect Details")
    
            }

            static balance() {
                var acno = document.getElementById('ano').value;
                var data = Bank.getaccdetails();
                if(acno in data)
                {
                    let uname = data[acno].name;
                    let ubalance = data[acno].balance;
                    document.getElementById('uname').innerHTML="Hello " + uname;
                    document.getElementById('ubalance').innerHTML="Your Current Balance is " + ubalance;
                }
                
            }
    }



