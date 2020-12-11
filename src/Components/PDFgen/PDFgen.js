import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import issuesJSON from '../../Issues'



const styles = StyleSheet.create({
    title: {
        margin: 20,
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#e4e4e4',
        textTransform: 'uppercase',
        fontFamily: 'Roboto',
    },
    text: {
        margin: 12,
        fontSize: 2,
      },
    body: {
        flexGrow: 1,
    },
    row: {
        flexGrow: 1,
        flexDirection: 'row',
    },
    block: {
        width: '100%',
        marginBottom:20
    },
    text: {
        margin:7,
        fontSize: 12,
    },
    textItalic: {
        width: '60%',
        margin: 10,
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        textAlign: 'justify',
    },
    fill1: {
        width: '40%',
        backgroundColor: '#e14427',
    },
    fill2: {
        flexGrow: 2,
        backgroundColor: '#e6672d',
    },
    fill3: {
        flexGrow: 2,
        backgroundColor: '#e78632',
    },
    fill4: {
        flexGrow: 2,
        backgroundColor: '#e29e37',
    },
});


// Create Document Component
const MyDocument = (props) => {

    const issues = props.issues;

    return(
    <Document>
        <Page size="A4" style={styles.page}>
            <Text>Consent Report</Text>
            <View>
                <Image src="data:image/png;base64,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" />
                <View style={styles.block}>
                <Text>Url: </Text>
                <Text>Time of screenshot: </Text>
                </View>
            </View>

            <View style={styles.block}>
            <Text>Image Issues</Text>
            </View>

            <View >

                {issues.map((issue1, index) => {
                    return (
                    <View style={styles.block}>
                    <Text>{index}</Text>
                    <Text>-</Text>
                    {issuesJSON.map((issuesJSON,i)=>{
                        return(
                            <View>
                        { issue1.issue[i] ? 
                        <View style={styles.block}> 
                        <Text>{issuesJSON.value}</Text>
                        <Text style={styles.text}>Relevant Articles: {issuesJSON.law}</Text>
                        <Text style={styles.text}>Description: {issuesJSON.lawDescription}</Text>
                        <Text style={styles.text} >Additional Comments: </Text> 
                        </View>
                        : null}
                        </View>
                        );
                    })}
                    <Text></Text>
                    </View>
                    );
                })


                }

            </View>
        </Page>
    </Document>);
};




export default MyDocument