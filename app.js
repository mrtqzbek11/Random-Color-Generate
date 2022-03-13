/** Random Color JavaScript Code :)) From Mert Özbek
 ****************************************************/


const randomColor = () => {
    let text;

    let colorText = Math.floor(Math.random() * 16999999).toString(16);

    document.body.style.background = (`#${colorText}`);

    text = document.getElementById('text').innerHTML = (`Hex code of this color: #${colorText}`);
}