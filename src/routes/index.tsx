import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { localizedStrings } from '../constants/localization'
import { getFontFamily } from '../constants/font-manager'
import { getAsyncStoreData, setAsyncStoreData } from '../utils/async-storage'
import { useDispatch } from 'react-redux'
import { setAppLanguage, setFontFamily } from '../redux/app.reducer'
import RNRestart from 'react-native-restart';
const Routes = () => {
    const dispatch = useDispatch()
    const [appLoading, setAppLoading] = useState(false)
    const init = async () => {
        setAppLoading(true)
        Promise.all([
            await getAsyncStoreData('APP_FONT_FAMILY'),
            await getAsyncStoreData('APP_LANGUAGE')
        ]).then(async (values) => {
            const [fontFamily, language] = values
            if (!fontFamily || !language) {
                console.log('hhhhh')
                await setAsyncStoreData('APP_FONT_FAMILY', 'Inter')
                await setAsyncStoreData('APP_LANGUAGE', 'en-US')
                dispatch(setFontFamily('Inter'))
                dispatch(setAppLanguage('en-US'))
                localizedStrings.setLanguage('en-US')
            }

            if (fontFamily && language) {
                dispatch(setFontFamily(fontFamily))
                dispatch(setAppLanguage(language))
                localizedStrings.setLanguage(language)

            }

            setAppLoading(false)
        })
    }

    const changeLanguage = async () => {
        const currentLanguage = localizedStrings.getLanguage()
        await setAsyncStoreData('APP_LANGUAGE', currentLanguage === 'en-US' ? 'it' : 'en-US')
        RNRestart.restart();
    }


    useEffect(() => {
        init()
    }, [])
    return (
       <>
        <SafeAreaView>
            <Text
                style={{
                    fontFamily: getFontFamily('Inter', 'Light'),
                }}>
                {
                    localizedStrings.how
                }
            </Text>
            <Button title='Change language' onPress={changeLanguage} />

        </SafeAreaView>

        {
            appLoading && <Text>
                Loading...
            </Text>
        }
       </>
    )
}

export default Routes

const styles = StyleSheet.create({})