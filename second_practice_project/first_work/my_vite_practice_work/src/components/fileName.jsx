import React from "react";


function FileName({file, repoName, folderName}){


    return(
        <>
        <div>
          <h4>  {file || "The name of this file was not i dentified"}</h4>
            <h4>{repoName || "The repo was not identified"}</h4>
            <h4>{folderName || "The folder was not identified"}</h4>
        </div>
        </>
    )
}
export default FileName;