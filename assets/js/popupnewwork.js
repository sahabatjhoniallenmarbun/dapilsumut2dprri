document.getElementById("popupBtn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

document.getElementById("copyBtn").addEventListener("click", function() {
    // Logic to copy the link to the clipboard
    var dummyLink = document.createElement("input");
    var linkToCopy = window.location.href;
    dummyLink.value = linkToCopy;
    document.body.appendChild(dummyLink);
    dummyLink.select();
    document.execCommand("copy");
    document.body.removeChild(dummyLink);
    alert("Link telah disalin: " + linkToCopy);
});
