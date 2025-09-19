(function(){
    // 🔑 Change this code per buyer
    var validLicense = "IAS-2025-CHENNAI-001"; // unique license per buyer

    // Check saved license
    var entered = localStorage.getItem("tool_license");

    if(!entered){
        var userCode = prompt("Enter your License Key:");
        localStorage.setItem("tool_license", userCode);
        entered = userCode;
    }

    if(entered !== validLicense){
        document.body.innerHTML = "<h2 style='color:red;text-align:center;'>❌ Invalid License. Contact IIntellectual Space - www.iintellectualspace.com</h2>";
    }
    else {
        // Add watermark
        var style = document.createElement("style");
        style.innerHTML = `
          body::after {
            content: "Licensed Copy - ${validLicense} | IIntellectual Space - www.iintellectualspace.com";
            position: fixed;
            bottom: 5px;
            right: 5px;
            font-size: 10px;
            opacity: 0.3;
            color: red;
            pointer-events: none;
            z-index: 9999;
          }
        `;
        document.head.appendChild(style);
    }
})();
