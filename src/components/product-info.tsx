"use client";

import {
  Heart,
  Truck,
  RotateCcw,
} from "lucide-react";
import type { Product } from "@/services/api.model";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  standardDelivery,
  standardDeliveryEnd,
} from "../../utils/shippingDate";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2">
          <h2 className="text-2xl font-bold">
            PME Legend
          </h2>
          <h1 className="text-2xl font-bold mb-2">
            {product.title}
          </h1>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">
            {product.price}€
          </span>
          <span className="text-sm text-gray-500">
            IVA inclusa
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium">
              Colore:
            </span>
            <span>buckthorne brown</span>
          </div>

          <div className="space-y-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Scegli una taglia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">
                  XS
                </SelectItem>
                <SelectItem value="s">
                  S
                </SelectItem>
                <SelectItem value="m">
                  M
                </SelectItem>
                <SelectItem value="l">
                  L
                </SelectItem>
                <SelectItem value="xl">
                  XL
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-black text-white hover:bg-black/90">
            Aggiungi al carrello
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="w-5 h-5" />
          </Button>
        </div>

        {/* Informazioni di spedizione */}
        <div className="space-y-4 pt-4 border-t">
          <div className="text-sm">
            <p>
              Venduto da{" "}
              <span className="text-purple-600 font-medium">
                PME Legend
              </span>
              , spedito da Zalando.
            </p>
          </div>

          <div className="space-y-4 border rounded-md divide-y">
            {/* Consegna veloce */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">
                  1 - 3 giorni lavorativi
                </span>
                <span className="font-medium">
                  5,95 €
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Consegna veloce
              </span>
            </div>

            {/* Consegna standard */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">
                  {standardDelivery.toLocaleDateString(
                    "it-IT",
                    {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    }
                  )}{" "}
                  -{" "}
                  {standardDeliveryEnd.toLocaleDateString(
                    "it-IT",
                    {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    }
                  )}
                </span>
                <span className="font-medium">
                  gratuita
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Consegna standard
              </span>
            </div>
          </div>

          {/* Info aggiuntive */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span>
                Spedizione e reso gratuiti
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              <span>
                30 giorni per restituire il tuo
                ordine
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
