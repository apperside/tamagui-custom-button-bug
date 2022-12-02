import { forwardRef } from 'react'
import {
  styled,
  themeable,
  ButtonFrame,
  ButtonText,
  ButtonProps as TamaguiButtonProps,
  GetProps,
  useButton,
  TamaguiElement,
} from 'tamagui'

const CustomButtonFrame = styled(ButtonFrame, {
  // ...
})

const CustomButtonText = styled(ButtonText, {
  // ...
})

type CustomButtonProps = GetProps<typeof CustomButtonFrame>
type CustomButtonTextProps = GetProps<typeof CustomButtonText>

export type ButtonProps = TamaguiButtonProps & CustomButtonProps & CustomButtonTextProps

export const AppButton = themeable(
  forwardRef<TamaguiElement, ButtonProps>((propsIn, ref) => {
    const { props } = useButton(propsIn, { Text: CustomButtonText })
    return <CustomButtonFrame {...props} ref={ref} />
  })
)
