import { MigrationInterface, QueryRunner } from 'typeorm';

export class RecreateTables1693873501662 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    CREATE TABLE public.user (
        id integer NOT NULL,
        name character varying NOT NULL,
        email character varying NOT NULL,
        cpf character varying NOT NULL,
        phone character varying NOT NULL,
        password character varying NOT NULL,
        type_user int NOT NULL,
        created_at timestamp without time zone DEFAULT now() NOT NULL,
        updated_at timestamp without time zone DEFAULT now() NOT NULL,
        primary key(id)
    );
    create sequence public.user_id_seq 
        as integer
        start with 1
        increment by 1
        no minvalue
        no maxvalue
        cache 1;
        
        alter sequence public.user_id_seq owned by public.user.id;
        
        alter table only public.user alter column id set default nextval('public.user_id_seq'::regclass);

        CREATE TABLE public.state (
            id integer NOT NULL,
            name character varying NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id)
        );
        CREATE SEQUENCE public.state_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
            
        ALTER SEQUENCE public.state_id_seq OWNED BY public.state.id;
        ALTER TABLE ONLY public.state ALTER COLUMN id SET DEFAULT nextval('public.state_id_seq'::regclass);
        
        CREATE TABLE public.city (
            id integer NOT NULL,
            state_id integer NOT NULL,
            name character varying NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id),
            foreign key (state_id) references public.state(id)
        );
        CREATE SEQUENCE public.city_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
            
        ALTER SEQUENCE public.city_id_seq OWNED BY public.city.id;
        ALTER TABLE ONLY public.city ALTER COLUMN id SET DEFAULT nextval('public.city_id_seq'::regclass);

        CREATE TABLE public.address (
            id integer NOT NULL,
            user_id integer NOT NULL,
            complement character varying,
            number integer NOT NULL,
            cep character varying NOT NULL,
            city_id integer NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id),
            foreign key (user_id) references public.user(id),
            foreign key (city_id) references public.city(id)
        );
        
        CREATE SEQUENCE public.address_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
            
        ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;
        
        ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);

    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
