#include <stdio.h>
#include <stdlib.h>

int main()
{
    int x, y, i, resultado =1;
    printf("Informe o valor de X:");
    scanf("%d",&x);
    printf("Informe o valor de Y:");
    scanf("%d",&y);
    for (i=1; i<=y; i++){
        Resultado *=x;
    }
    printf("%d ¨ %d =%d\n", x, y, &resultado);
    return 0;
}
