export const Footer =()=>{
  
  return(
    <footer className="border-t-4 border-[#0D0D0D] px-6 pt-12 pb-32">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
              <div>
                <p className="font-display text-2xl font-black uppercase">
                  Epifânio <span className="text-[#FF3D00]">Valente</span>
                </p>
                <p className="mt-2 max-w-xs text-sm text-[#0D0D0D]/60">
                  Jovem, Informático, Programador.
                </p>
              </div>

              
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t-2 border-[#0D0D0D] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[11px] text-[#0D0D0D]/50">

                &copy; 2026 Epifânio/PinGadas. Todos os bugs debugados.
              </p>
              <p className="font-mono text-[11px] text-[#0D0D0D]/50">
                Talatona, Luanda - Angola.
              </p>
            </div>
          </div>
        </footer>
  )
}