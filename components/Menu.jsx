export default function Menu(){
return(
    <div className="h-16 w-full flex items-center justify-center bg-white">
        <ul className="flex flex-row gap-20 w-full h-full justify-center items-center">
            <li className="w-20 h-20 flex items-center justify-center hover:bg-gray-200">Home</li>
            <li className="w-20 h-20 flex items-center justify-center hover:bg-gray-200">Sobre</li>
            <li className="w-20 h-20 flex items-center justify-center hover:bg-gray-200">Contato</li>

        </ul>
    </div>
)
}