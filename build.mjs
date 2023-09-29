import { glob } from "glob";
import fs from "fs";
import * as prettier from "prettier";
import { renderFile } from "pug";
(async () => {
 const results = await glob("View/*/index.pug",{
    ignore:"node_modules"
 });

 results.forEach(async (file)=>{
        let  output = renderFile(file);
        output = await prettier.format(output,{semi:true,parser:"html"});
        ["Sell","Landing"].forEach((folderName)=>{
            fs.mkdirSync(`dist\\View\\${folderName}`,{
                recursive:true
            });
        })
        
        fs.writeFileSync(`dist\\${file.replace("index.pug","index.html")}`,output);
    });
})();
