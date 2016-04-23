function submitComment() {
    var name = document.getElementById("name");
    var comment = document.getElementById("comment");
    
    var commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    
    var commentName = document.createElement("h3");
    commentName.className = "commenter";
    
    var commentContent = document.createElement("p");
    commentContent.className = "content";

    commentName.innerHTML = name.value;
    commentContent.innerHTML = comment.value;
        
    commentDiv.appendChild(commentName);
    commentDiv.appendChild(commentContent);
    
    if (name.value !== "" &&
        comment.value !== "") { 
        var comments = document.getElementById("comments");
        comments.appendChild(commentDiv);
        
        comment.value = "";        
    }    
}

document.getElementById("submitButton").addEventListener("click", submitComment);