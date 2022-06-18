import { Card, ScrollableContainer } from "./ScrollableCards.styles";

type ScrollableCardsProps = {
    cards: any[]
}

const ScrollableCards = ({cards}: ScrollableCardsProps) => 
    <ScrollableContainer>
        {cards.length && (
            cards.map(card => {
                return <Card>{card}</Card>
            })
        )}
    </ScrollableContainer>
;

export default ScrollableCards;