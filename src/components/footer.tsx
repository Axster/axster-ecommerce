import Link from "next/link"
import Image from "next/image"
import { BugIcon as QuestionMark, Gift } from "lucide-react"

export function Footer() {
  return (
    <footer>
      <div className="bg-[#6428F1] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Aiuto e contatti */}
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <QuestionMark className="w-5 h-5" />
                Aiuto e contatti
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Domande frequenti
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Come effettuare un ordine
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Tempi di spedizione
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Come effettuare un reso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Prodotti partner
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sicurezza del prodotto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Metodi di pagamento e altro */}
            <div>
              <ul className="space-y-3 text-sm mt-12">
                <li>
                  <Link href="#" className="hover:underline">
                    Metodi di pagamento
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Dove si trova il mio ordine
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Come modifico i dati in account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Iscriviti alla nostra Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Buoni regalo */}
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Buoni regalo
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Acquista un buono regalo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Buoni Regalo Aziendali
                  </Link>
                </li>
              </ul>
            </div>

            {/* ZALANDO */}
            <div>
              <h3 className="font-bold mb-4">ZALANDO</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Sito aziendale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Lavoro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Stampa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Investitori
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Shipping and Payment */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div>
              <h4 className="font-bold mb-4 text-sm flex items-center gap-2">
                <Image src="/placeholder.svg" alt="shipping" width={24} height={24} className="w-5 h-5" />
                Spedito da
              </h4>
              <div className="flex gap-4">
                <Image src="/placeholder.svg" alt="DHL" width={50} height={25} className="h-6" />
                <Image src="/placeholder.svg" alt="SDA" width={50} height={25} className="h-6" />
                <Image src="/placeholder.svg" alt="BRT" width={50} height={25} className="h-6" />
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm flex items-center gap-2">
                <Image src="/placeholder.svg" alt="payment" width={24} height={24} className="w-5 h-5" />
                Modalità di pagamento
              </h4>
              <div className="grid grid-cols-5 gap-2">
                {[...Array(10)].map((_, i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg"
                    alt={`Payment method ${i + 1}`}
                    width={40}
                    height={25}
                    className="h-6"
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm flex items-center gap-2">
                <Image src="/placeholder.svg" alt="shopping" width={24} height={24} className="w-5 h-5" />
                Shopping online facile
              </h4>
              <ul className="text-sm space-y-2">
                <li>Spedizione e reso gratuiti*</li>
                <li>Reso gratuito</li>
                <li>30 giorni per il reso</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm">Diventa Partner</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Connected Retail
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Servizi di marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Scopri di più
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Zalando Partner
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Black footer */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Link href="#" className="text-sm hover:underline">
                  CGV
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Informazioni legali
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Privacy
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-sm hover:underline">
                  Tech blog
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Impostazioni dati
                </Link>
              </div>
            </div>

            <div>
              <h5 className="text-sm mb-4">App Zalando:</h5>
              <div className="flex items-center gap-4">
                <Image src="/placeholder.svg" alt="QR Code" width={80} height={80} className="rounded" />
                <div className="space-y-2">
                  <Image src="/placeholder.svg" alt="App Store" width={120} height={40} className="h-10" />
                  <Image src="/placeholder.svg" alt="Google Play" width={120} height={40} className="h-10" />
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-sm mb-4">Trovaci anche su:</h5>
              <div className="flex space-x-4">
                {[...Array(5)].map((_, i) => (
                  <Link key={i} href="#" className="hover:opacity-80">
                    <Image
                      src="/placeholder.svg"
                      alt={`Social ${i + 1}`}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

