//dat ten component theo kieu PascalCase, khac ten file cung dc 
const DducComponent = () => {   
    // tsx (tat ca khoi code ben trong return) : tsx = html + js = 1 block code bao boi 1 div cha
    return (
        <div>
            <h1>Hedy Lamarr's Todos</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"   // class -> className vì class là từ khóa trong js do code html trong file js
            />      {/* nhớ đóng tag ul */}
                <ul>
                    <li>Invent new traffic lights </li>
                    <li>Rehearse a movie scene </li>
                    <li>Improve the spectrum technology </li>
                </ul>
        </div>
    )
}

export default DducComponent;