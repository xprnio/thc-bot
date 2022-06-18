import { ConversationOption } from '../../features/conversation/conversationSlice'
import { Button } from '../Button/Button.styled'
import * as Styled from './OptionGroup.styled'

type OptionGroup = {
    options: ConversationOption[]
    onSubmit: (value: string) => any
}

export const OptionGroup: React.FC<OptionGroup> = ({options, onSubmit}) => {

    return(
        <Styled.OptionGroup>
            {
                options.map(option => <Button onClick={() => onSubmit(option.key)}>{option.label}</Button>)
            }
        </Styled.OptionGroup>
    )
}