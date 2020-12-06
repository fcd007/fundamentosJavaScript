//módulo do nodejs para trabalhar com arquivos SO.
const fs = require('fs');
// fs.readFile('./file01.txt', (error, response) => {
//     if(error){
//         console.log('Deu ruim, faça novamente', error.stack);
//         return;
//     }
//     //ele retorna um buffer como resposta
//     console.log('resposta', response);
//     //vamos converter ele para string com o toString()
//     console.log('resposta', response.toString());
// });

fs.readFile('./file01.txt', (errorFile1, response1) => {
    if(errorFile1) {
        console.log(`Error not found file1 ${errorFile1}`);
        return;
    }
    
    fs.readFile('./file02.txt', (errorFile2, response2) => {
        if(errorFile2) {
            console.log(`Error not found file2 ${errorFile2}`);
            return;
        }

        fs.readFile('./file03.txt', (errorFile3, response3) => {
            if(errorFile3) {
                console.log(`Error not found file3 ${errorFile3}`)
                return;
            }
            //quando usamos crase convertemos automáticamente para toString()
            const contentFiles = `${response1}\n${response2}\n${response3}`
            // console.log(contentFiles)
            fs.writeFile('./final.txt', contentFiles, (errorWrite, responseFinal) => {
                if(errorWrite) {
                    console.log(`Error file write SO, ${errorWrite}`);
                    return;
                }

                console.log('Arquivo salvo com sucesso!!!');
            })
        });
    });
    
})