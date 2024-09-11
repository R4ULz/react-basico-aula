export default function Form(){
    return(
        <div className="bg-white flex w-1/2 h-2/3 rounded-3xl shadow-2xl -mt-32">
            <div className="flex justify-center w-full">
                <form>
                    <div className="flex flex-row text-lg w-full p-10 gap-10 justify-center">
                        <div className="flex flex-col w-1/2 gap-5">
                            <label htmlFor="">Nome:</label>
                            <input type="text" className="w-64 border-2 border-violet-300 rounded-md"/>
                            <label htmlFor="">Email:</label>
                            <input type="text" className="w-64 border-2 border-violet-300 rounded-md" />
                        </div>
                        <div className="flex flex-col w-1/2 gap-5">
                            <label htmlFor="">Telefone:</label>
                            <input type="text" className="w-64 border-2 border-violet-300 rounded-md" />
                            <label htmlFor="">Teste:</label>
                            <input type="text" className="w-64 border-2 border-violet-300 rounded-md" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-10">
                    <label>Digite um comentário:</label>
                    <textarea className="outline-none p-2 rounded-xl border-2 border-violet-300 resize-none w-full h-32"></textarea>
                    </div>
                    <button className="bg-violet-500 rounded-lg w-20 h-10 text-white ml-5">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}