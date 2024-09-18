import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 8, // Reduced padding
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  heading: {
    fontSize: 14, // Reduced font size
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12, // Reduced margin
    color: '#000000',
  },
  sectionHeading: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#334155',
  },
  label: {
    fontSize: 8, // Reduced font size
    fontWeight: 'bold',
    marginBottom: 1, // Reduced margin
    color: '#334155',
  },
  input: {
    fontSize: 8, // Reduced font size
    padding: 1, // Reduced padding
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 2, // Reduced border radius
    color: '#334155',
  },
  textarea: {
    fontSize: 8, // Reduced font size
    padding: 1, // Reduced padding
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 2, // Reduced border radius
    color: '#334155',
    height: 20, // Reduced height
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: 4, // Reduced margin
  },
  column: {
    flex: 1,
    marginRight: 4, // Reduced margin
  },
  stampSection: {
    alignSelf: 'flex-end',
    borderWidth: 1, // Reduced border width
    borderColor: '#D1D5DB',
    padding: 4, // Reduced padding
    marginTop: 8, // Reduced margin
  },
  stampSectionHeading: {
    fontSize: 8, // Reduced font size
    fontWeight: 'bold',
    marginBottom: 2,
  },
  stamp: {
    width: 16, // Reduced width
    height: 16, // Reduced height
    backgroundColor: '#D1D5DB',
  },
});

// Create Document Component
const MyDocument = ({ detail }) => (
  <Document>
    <Page size={{ width: 420, height: 210 }} style={styles.page}> {/* Adjusted page size for 2:1 ratio */}
      <Text style={styles.heading}>Lokmanya Tilak College of Engineering</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.sectionHeading}>Student Information</Text>
          <View style={{ marginBottom: 2 }}> {/* Reduced margin */}
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.input}>{detail.student.Name}</Text>
          </View>
          {/* ... other student information fields */}
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionHeading}>Contact Information</Text>
          <View style={{ marginBottom: 2 }}> {/* Reduced margin */}
            <Text style={styles.label}>Phone No.:</Text>
            <Text style={styles.input}>{detail.student.phone_no}</Text>
          </View>
          {/* ... other contact information fields */}
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionHeading}>Academic Information</Text>
          <View style={{ marginBottom: 2 }}> {/* Reduced margin */}
            <Text style={styles.label}>College Year:</Text>
            <Text style={styles.input}>{detail.student.college_year}</Text>
          </View>
          {/* ..    <View>
        <Text style={styles.sectionHeading}>Travel Information</Text>
        <View style={{ marginBottom: 4 }}>
          <Text style={styles.label}>Destination:</Text>
          <Text style={styles.input}>{detail.destination}</Text>
        </View>
        <View style={{ marginBottom: 4 }}>
          <Text style={styles.label}>Class:</Text>
          <Text style={styles.input}>{detail.className}</Text>
        </View>
        <View style={{ marginBottom: 4 }}>
          <Text style={styles.label}>Duration:</Text>
          <Text style={styles.input}>{detail.duration}</Text>
        </View>
        <View style={{ marginBottom: 4 }}>
          <Text style={styles.label}>Line:</Text>
          <Text style={styles.input}>{detail.line}</Text>
        </View>
      </View>. other academic information fields 
        </View>
      </View>
      <View>
        <Text style={styles.sectionHeading}>Travel Information</Text>
        <View style={{ marginBottom: 2 }}> {/* Reduced margin */}
          <Text style={styles.label}>Destination:</Text>
          <Text style={styles.input}>{detail.destination}</Text>
        </View>
        {/* ... other travel information fields */}
      </View>
      <View style={styles.stampSection}>
        <Text style={styles.stampSectionHeading}>Stamp Section</Text>
        <View style={styles.stamp} />
      </View>
    </Page>
  </Document>
);

export default MyDocument;