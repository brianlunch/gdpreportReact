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
    console.log(props);
    const issues = props.issues;

    return(
    <Document>
        <Page size="A4" style={styles.page}>
            <Text>Consent Report</Text>
            
            <View>
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
                        <Text style={styles.text} >Additional Comments: {issue1.comments[i]}</Text> 
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