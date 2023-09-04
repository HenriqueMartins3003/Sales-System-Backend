import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1693861423405 implements MigrationInterface {
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
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table public.user
    `);
  }
}
