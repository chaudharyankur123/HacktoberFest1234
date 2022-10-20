#include<bits/stdc++.h>
#include<iostream>
using namespace std;
int main(){
    char str[100]="abc123def-567ghi89jk";
    int sum=0;
    for(int i=0;str[i]!='\0';i++){
        if ((str[i] >= '0') && (str[i] <= '9')) 
        {
            sum += (str[i] - '0'); 
        }
    }
    
    cout<<"Sum of all digits:"<< sum;
    return 0; 
}
    
