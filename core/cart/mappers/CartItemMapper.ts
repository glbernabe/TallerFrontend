import type { CartItemDto } from "../dto/CartItemDto";
import type { CartItem } from "@/domain/cart/CartItem";

export class CartItemMapper {

    static toDomain(dto: CartItemDto): CartItem {

        return {

            id: dto.id,

            title: dto.name,

            price:
                typeof dto.price === "string"
                    ? Number(dto.price)
                    : dto.price,

            quantity: dto.quantity ?? 1,

        };

    }

    static toDomainList(
        dtoList: CartItemDto[],
    ): CartItem[] {

        return dtoList.map(CartItemMapper.toDomain);

    }

}