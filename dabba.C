#include<stdio.h>
#include<stdlib.h>
#define SIZE 2

void insert(int q[],int item,int *r)
{
    if((*r)==SIZE-1)
    {
        printf("\nQueue overflow\n");
    }
    else
    {
        q[++(*r)]=item;

    }
}

int delete_front(int q[],int *f,int *r)
{
    if((*f)>(*r))
    {
        printf("\nQueue Underflow\n");
    }
    else
    {
        return(q[(*f)++]);

    }
}

void display(int q[],int *f,int *r)
{
    int i;
    if((*f)>(*r))
    { printf("\nQueue Underflow\n");
    }
    else
    {
        for(i=(*f);i<=(*r);i++)
        {
            printf("%d ",q[i]);
        }

    }
}


int main()
{
    int choice,del_item,q[SIZE],f=0,r=-1,item;
while (1)
{
    
    printf("\n\n---Menu---\n");
    printf("1.Insert Values into the Queue\n2.Delete values from the Queue\n3.Display items in the Queue\n4.Exit\n");
    scanf("%d",&choice);

    switch(choice)
    {   
        case 1: printf("Enter the value to be inserted:");
                scanf("%d",&item);
                insert(q,item,&r);
                printf("Values have been inserted\n");
                break;
        case 2: del_item=delete_front(q,&f,&r);
                printf("Deletion Successful\n");
                break;
        case 3: printf("%d",f);
                display(q,&f,&r);
                break;
        case 4: exit(0);
                break;

    }
   
}


return 0;
}
