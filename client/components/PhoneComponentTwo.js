import React, { PureComponent, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import CountryPicker, {
  getCallingCode,
  DARK_THEME,
  DEFAULT_THEME,
  CountryModalProvider,
  Flag,
} from "react-native-country-picker-modal";
import { PhoneNumberUtil } from "google-libphonenumber";
import styles from "../styles/common";

const dropDown =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAi0lEQVRYR+3WuQ6AIBRE0eHL1T83FBqU5S1szdiY2NyTKcCAzU/Y3AcBXIALcIF0gRPAsehgugDEXnYQrUC88RIgfpuJ+MRrgFmILN4CjEYU4xJgFKIa1wB6Ec24FuBFiHELwIpQxa0ALUId9wAkhCnuBdQQ5ngP4I9wxXsBDyJ9m+8y/g9wAS7ABW4giBshQZji3AAAAABJRU5ErkJggg==";
const phoneUtil = PhoneNumberUtil.getInstance();

const PhoneInput = (props) => {
  const [countryCode, setCountryCode] = useState(props.defaultCode || "IN");
  const [code, setCode] = useState(props.defaultCode ? undefined : "91");
  const [number, setNumber] = useState(props.value || props.defaultValue || "");
  const [modalVisible, setModalVisible] = useState(false);
  const [disabled, setDisabled] = useState(props.disabled || false);

  useEffect(() => {
    if (props.defaultCode) {
      (async () => {
        const newCode = await getCallingCode(props.defaultCode);
        setCode(newCode);
      })();
    }
  }, [props.defaultCode]);

  useEffect(() => {
    if (props.disabled !== disabled) {
      setDisabled(props.disabled);
    }
    if ((props.value || props.value === "") && props.value !== number) {
      setNumber(props.value);
    }
  }, [props.disabled, props.value, number, disabled]);

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCode(country.callingCode[0]);
    props.onChangeCountry && props.onChangeCountry(country);
    const newNumber = country.callingCode[0]
      ? `+${country.callingCode[0]}${number}`
      : number;
    props.onChangeFormattedText && props.onChangeFormattedText(newNumber);
  };

  const onChangeText = (text) => {
    setNumber(text);
    props.onChangeText && props.onChangeText(text);
    const formattedNumber = code ? `+${code}${text}` : text;
    props.onChangeFormattedText && props.onChangeFormattedText(formattedNumber);
  };

  const getNumberAfterPossiblyEliminatingZero = () => {
    // let { number, code } = this.state;
    if (number.length > 0 && number.startsWith("0")) {
      number = number.substr(1);
      return { number, formattedNumber: code ? `+${code}${number}` : number };
    } else {
      return { number, formattedNumber: code ? `+${code}${number}` : number };
    }
  };

  const renderDropdownImageFunc = () => {
    return (
      <Image
        source={{ uri: dropDown }}
        resizeMode="contain"
        style={styles.dropDownImage}
      />
    );
  };

  const renderFlagButton = (props) => {
    const { layout = "first", flagSize } = props;
    // const { countryCode } = this.state;
    if (layout === "first") {
      return (
        <Flag
          countryCode={countryCode}
          flagSize={flagSize ? flagSize : DEFAULT_THEME.flagSize}
        />
      );
    }
    return <View />;
  };

  const {
    withShadow,
    withDarkTheme,
    codeTextStyle,
    textInputProps,
    textInputStyle,
    autoFocus,
    placeholder,
    disableArrowIcon,
    flagButtonStyle,
    containerStyle,
    textContainerStyle,
    renderDropdownImage,
    countryPickerProps = {},
    filterProps = {},
    countryPickerButtonStyle,
    layout = "first",
  } = props;

  return (
    <CountryModalProvider>
      <View
        style={[
          styles.container,
          withShadow ? styles.shadow : {},
          containerStyle ? containerStyle : {},
        ]}
      >
        <TouchableOpacity
          style={[
            styles.flagButtonView,
            layout === "second" ? styles.flagButtonExtraWidth : {},
            flagButtonStyle ? flagButtonStyle : {},
            countryPickerButtonStyle ? countryPickerButtonStyle : {},
          ]}
          disabled={disabled}
          // onPress={() => this.setState({ modalVisible: true })}
          onPress={() => setModalVisible(true)}
        >
          <CountryPicker
            onSelect={onSelect}
            withEmoji
            withFilter
            withFlag
            filterProps={filterProps}
            countryCode={countryCode}
            withCallingCode
            disableNativeModal={disabled}
            visible={modalVisible}
            theme={withDarkTheme ? DARK_THEME : DEFAULT_THEME}
            renderFlagButton={renderFlagButton}
            //   onClose={() => this.setState({ modalVisible: false })}
            onClose={() => setModalVisible(false)}
            {...countryPickerProps}
          />
          {code && layout === "second" && (
            <Text
              style={[styles.codeText, codeTextStyle ? codeTextStyle : {}]}
            >{`+${code}`}</Text>
          )}
          {!disableArrowIcon && (
            <React.Fragment>
              {renderDropdownImage
                ? renderDropdownImage
                : renderDropdownImageFunc()}
            </React.Fragment>
          )}
        </TouchableOpacity>
        <View
          style={[
            styles.textContainer,
            textContainerStyle ? textContainerStyle : {},
          ]}
        >
          {code && layout === "first" && (
            <Text
              style={[styles.codeText, codeTextStyle ? codeTextStyle : {}]}
            >{`+${code}`}</Text>
          )}
          <TextInput
            style={[styles.numberText, textInputStyle ? textInputStyle : {}]}
            placeholder={placeholder ? placeholder : "Phone Number"}
            onChangeText={onChangeText}
            value={number}
            editable={disabled ? false : true}
            selectionColor="black"
            keyboardAppearance={withDarkTheme ? "dark" : "default"}
            keyboardType="number-pad"
            autoFocus={autoFocus}
            {...textInputProps}
          />
        </View>
      </View>
    </CountryModalProvider>
  );
};

export const isValidNumber = (number, countryCode) => {
  try {
    const parsedNumber = phoneUtil.parse(number, countryCode);
    return phoneUtil.isValidNumber(parsedNumber);
  } catch (err) {
    return false;
  }
};

export default PhoneInput;
