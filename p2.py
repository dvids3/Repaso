class mi_personaje():
    def __init__(self, nombre, fuerza, velocidad, inteligencia, vida):
        self.nombre = nombre
        self.fuerza = fuerza
        self.velocidad = velocidad
        self.inteligencia = inteligencia
        self.vida = vida
        self.ataque = (fuerza * velocidad) / 5
        self.defensa = (fuerza * vida) / 5

    def atributos(self):
        print(f"fuerza:{self.fuerza}")
        print(f"velocidad:{self.velocidad}")
        print(f"inteligencia:{self.inteligencia}")
        print(f"vida:{self.vida}")
        print(f"ataque:{self.ataque}")
        print(f"defensa:{self.defensa}")

    def vivo(self):
        return self.vida > 0
    
    def murio(self):
        self.vida = 0
        print(self.nombre, "ha muerto")

    def daño(self, enemigo):
        return self.defensa - enemigo.ataque
    
    def ataques(self, enemigo):
        daño = self.daño(enemigo)
        enemigo.vida = enemigo.vida - daño 
        print (f"Temu ha propinado {daño} de daño a {enemigo.nombre}")
        if enemigo.vivo():
            print(f"la vida de {enemigo.nombre} es {enemigo.vida}")
        else:
            enemigo.murio()
    

jugador1 = mi_personaje("Temu", 9, 5, 9, 10)
enemig = mi_personaje("Aliexpress",6, 5, 7, 10)


class otro(mi_personaje):
    def __init__(self, nombre, fuerza, velocidad, inteligencia, vida, vidas, arma):
        super().__init__(nombre, fuerza, velocidad, inteligencia, vida)
        self.vidas = vidas
        self.arma = arma

    def dañodearma(self):
        op = int(input(f"elije arma: (1) M14 (2)UZI (3) ESCOPETA"))
        if op == 1:
            self.arma = print("ataque ha incrementado a", self.ataque + 4.1)
        elif op == 2:
            self.arma = print("ataque ha incrementado a", self.ataque + 2.5)
        elif op == 3:
            self.arma = print("ataque ha incrementado a", self.ataque + 3.3)
        else:
            print("opcion incorrecta")
    
    def atributos(self):
        return super().atributos()
        print("arma", self.arma)
        

            
amazon = otro("amazon", 10, 8, 9, 10, 2, 3) 



print(amazon.arma)
amazon.atributos()



     