int scoreOfParentheses(char * s){
int i,flag;
int score=0,count1=0,count2=0;
char string[100];
char stack[100];
int top=-1;


void push(char ch)
{
    stack[++top]=ch;
}


char pop()
{
    return(stack[top--]);
}



for(i=0;s[i]!='\0';i++)
{

    if(s[i]=='(')
    {   
       push(s[i]);
       count1++;
    }
    else if(s[i]==')')
    {
        pop();
        count2++;

            if(count1==count2)
                flag=1;
            else
                flag=0;
    }
}


if(flag=1)
{
score=count1;
}
else if(flag=0)
{
    score=2*(count1-1);


}


return(score);

}
