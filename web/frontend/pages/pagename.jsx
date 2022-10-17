import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {DataTable} from '@shopify/polaris';
import React from 'react';
import  Naseer from "./naseer";

export default function PageName() {

  
  

  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];
  return (
    <Page>
      <TitleBar
        title="Page name"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      {/* <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text'
            
          ]}
          headings={[
            'Products',
            'Scanned Products'
            
          ]}
          rows={rows}
          
        />
      </Card> */}
      
      <Layout.Section><Naseer/></Layout.Section>
      
        
      
      
      
    </Page>
  );
}
